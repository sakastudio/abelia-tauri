import {Table} from "@mantine/core";

interface ListItemProps {
    name : string;
}

export const SupportCenterCustomerListItem = (props: ListItemProps) => {

    return(
        <Table.Tr>
            <Table.Td>0001</Table.Td>
            <Table.Td>一般</Table.Td>
            <Table.Td>TODO マスタ化</Table.Td>
            <Table.Td>{props.name}</Table.Td>
            <Table.Td>様</Table.Td>
        </Table.Tr>
    );
}
