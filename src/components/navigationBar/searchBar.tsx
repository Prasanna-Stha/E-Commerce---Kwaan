import { useRef, useState, useEffect } from "react";
import { Input, Icon, Flex } from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";
import { useProductList } from "@/services/product";

interface SearchBarProps {
  onSearch: (results: any[]) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [term, setTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {data: response}=useProductList();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    try {
      const filtered = (response??[]).filter((p: {title: string}) => p.title.toLowerCase().includes(value.toLowerCase()));
      onSearch(filtered);
    } catch {
      onSearch([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Flex ref={ref} position="relative" align="center">
      {isOpen && (
        <Input
          placeholder="Search products"
          value={term}
          onChange={handleSearch}
          width="200px"
          size="sm"
          color="#111"
        />
      )}
      <Icon
        as={IoMdSearch}
        boxSize="22px"
        ml="2"
        cursor="pointer"
        onClick={() => setIsOpen(true)}
        color="#111"
      />
    </Flex>
  );
};
