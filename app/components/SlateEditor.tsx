import { CloseButton } from '@chakra-ui/react'
import { Box, Button, Heading, HStack, Input, Text } from "@chakra-ui/react";
import e from "express";
import isHotkey from "is-hotkey";

import React, { useCallback, useMemo, useState } from "react";
import {
  BaseEditor,
  BaseElement,
  createEditor,
  Descendant,
  Editor,
  Element as SlateElement,
  Transforms,
} from "slate";
import { HistoryEditor, withHistory } from "slate-history";
import { ReactEditor, Slate, withReact, Editable } from "slate-react";

const HOTKEYS: any = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaCode,
  FaHeading,
} from "react-icons/fa";
import {BiRefresh} from "react-icons/bi"

type CustomText = { text: string };
type CustomElement = { type: "paragraph"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
export default function SlateEditor() {
  const initialValue: Descendant[] = [
      {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];

  const [value, setValue] = React.useState<Descendant[]>(initialValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withHistory(withReact(createEditor() as ReactEditor)),
    []
  );

  return (
    <Box>
      <Box>
        {/* <HStack spacing={"2"} justifyContent="space-between"> */}
        <HStack spacing={"2"}>
         <HStack>
         <MarkButton
            e={editor}
            mr="1"
            size={"sm"}
            icon={<FaBold />}
            format={"bold"}
          >
            Bold
          </MarkButton>
          <MarkButton
            e={editor}
            icon={<FaItalic />}
            format={"italic"}
            mx="1"
            size={"sm"}
          >
            Italic
          </MarkButton>
          <MarkButton
            e={editor}
            icon={<FaCode />}
            format={"code"}
            mx="1"
            size={"sm"}
          >
            code
          </MarkButton>
          <BlockButton
            e={editor}
            icon={<FaHeading />}
            format={"heading"}
            mx="1"
            size={"sm"}
          >
            h1
          </BlockButton>
          <Input type="color" maxW={"60px"} size="sm"/>
         </HStack>
          <HStack>
              <HStack><Text>Status </Text><BiRefresh /></HStack>
             
              <Button size="md" colorScheme={"green"}>✔</Button>
          </HStack>
          {/* <MarkButton e={editor} icon="" format={""} mx="1" size={"sm"}>h2</MarkButton> */}
        </HStack>
      </Box>
      <Box pt="3" border={"1px"} borderColor="green" borderStyle={"dashed"} style={{width:'70vw',minHeight:"40vh"}} p="3" mt="3">
        <Slate editor={editor} value={value} onChange={(e) => setValue(e)}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event as any)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
          ></Editable>
        </Slate>
      </Box>
    </Box>
  );
}

const BlockButton = ({ format, icon, e }: any) => {
  let editor = e;
  let mark = format;
  return (
    <Button
      size={"sm"}
      borderRadius="1"
      colorScheme={"gray"}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};

const MarkButton = ({ format, icon, e }: any) => {
  // const editor:any = useSta
  let editor = e;
  let mark = format;
  return (
    <Button
      size={"sm"}
      borderRadius="1"
      colorScheme={"gray"}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};

const Element = ({ attributes, children, element }: any) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading":
      return <Heading {...attributes}>{children}</Heading>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <Text as={"strong"}>{children}</Text>;
  }

  if (leaf.code) {
    children = <Text as="code">{children}</Text>;
  }

  if (leaf.italic) {
    children = <Text as={"em"}>{children}</Text>;
  }

  if (leaf.underline) {
    children = <Text as="u">{children}</Text>;
  }

  return <span {...attributes}>{children}</span>;
};

function toggleMark(editor: Editor, mark: any) {
  const isActive = isMarkActive(editor, mark);
  console.log("TOGGLE MARKED WORKED");

  if (isActive) {
    Editor.removeMark(editor, mark);
  } else {
    Editor.addMark(editor, mark, true);
  }
}

function isMarkActive(editor: Editor, mark: any) {
  const marks: any = Editor.marks(editor);

  return marks ? marks[mark] === true : false;
}

function toggleBlock(editor: Editor, format: any) {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  });

  const newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
}

function isBlockActive(editor: any, format: any) {
  const { selection } = editor;

  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
  );
  return !!match;
}
