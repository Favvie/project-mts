import React from "react";
import { Heading, Container, SimpleGrid } from "@chakra-ui/react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";
import Column from "./Column";
import { ColumnType } from "../utils/enums";

const DragApp = () => {
	return (
		<>
			<Container maxW="container.lg" px={4} py={10}>
				<DndProvider backend={HTML5Backend}>
					<SimpleGrid
						columns={{ base: 1, md: 4 }}
						spacing={{ base: 16, md: 4 }}
					>
						<Column column={ColumnType.TO_DO} />
						<Column column={ColumnType.IN_PROGRESS} />
						<Column column={ColumnType.BLOCKED} />
						<Column column={ColumnType.COMPLETED} />
					</SimpleGrid>
				</DndProvider>
			</Container>
		</>
	);
};

export default DragApp;
