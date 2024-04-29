import { Box, Text, Image, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="lg">
        移动端页面
      </Heading>
      <Box>
        <Text fontSize="xl">排名: #1</Text>
        <Text fontSize="xl">总人数: 500</Text>
      </Box>
      <Box>
        <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW5uZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQzNTg1MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Winner" boxSize="300px" />
        <Text>获胜者</Text>
      </Box>
      <Box>
        <Image src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydW5uZXIlMjB1cCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDM1ODUwN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Runner Up" boxSize="300px" />
        <Text>亚军</Text>
      </Box>
    </VStack>
  );
};

export default Index;
