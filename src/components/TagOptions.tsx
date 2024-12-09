import { Wrap, WrapItem, Tag } from '@chakra-ui/react';

interface TagOptionsProps {
  options: string[];
  selected: string[];
  onSelect: (option: string) => void;
}

const TagOptions = ({ options, selected, onSelect }: TagOptionsProps) => {
  return (
    <Wrap spacing={2}>
      {options.map((option) => (
        <WrapItem key={option}>
          <Tag
            size="lg"
            variant={selected.includes(option) ? "solid" : "outline"}
            colorScheme="blue"
            cursor="pointer"
            onClick={() => onSelect(option)}
          >
            {option}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default TagOptions;