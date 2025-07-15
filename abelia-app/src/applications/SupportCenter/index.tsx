import React from 'react';
import {Flex, Image, ScrollArea, Stack, Table, Text} from '@mantine/core';
import '@mantine/core/styles.css';
import './SupportCenterCustomerList.css';
import '../fonts.css';
import {SupportCenterCustomerListItem} from "./SupportCenterCustomerListItem.tsx";
import {CommonButton} from "../components/CommonButton";

const SupportCenter : React.FC = () => {

    return (
        <Flex direction="row" style={{height: '100%', width: '100%', backgroundColor: '#dfdfe0'}}>
            {/* 左側 顧客一覧 */}
            <Flex flex={1} direction="column">
                <Flex pt={10} pl={10}>
                    {/* 笑み道夫 */}
                    <Image w="20%" h="auto" style={{objectFit: 'contain', objectPosition: 'top', display: 'block'}}
                           src="assets/support-center/operator-placeholder.png"/>

                    <Stack gap={0} pt={20} pl={10}>
                        <Text ff='JF-Dot-Shinonome16' fw='bold' c='black'>笑み道夫</Text>
                        <Text ff='JF-Dot-Shinonome16' fw='bold' c='black'>社員 ID:063</Text>
                    </Stack>
                </Flex>
                <Flex pt={25} pl={10}>
                    {/* 連絡先 留守番電話 */}
                    <CommonButton h={30} w={100}>連絡先</CommonButton>
                </Flex>

                <Flex pt={12} pl={10}>

                    <ScrollArea h={420}>
                        {/* 顧客一覧22     */}
                        <Table verticalSpacing={0}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th className="headerCell" style={{pl: 0, pr: 0}}>コード</Table.Th>
                                    <Table.Th className="headerCell">分類</Table.Th>
                                    <Table.Th className="headerCell">ふりがな</Table.Th>
                                    <Table.Th className="headerCell">名前</Table.Th>
                                    <Table.Th className="headerCell">敬称</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                <SupportCenterCustomerListItem name={"名前1"}/>
                                <SupportCenterCustomerListItem name={"名前2"}/>
                            </Table.Tbody>
                        </Table>
                    </ScrollArea>
                </Flex>

                <Flex flex={0.07}>
                    {/* 終了ボタン */}
                </Flex>
            </Flex>

            {/* 右側 顧客詳細 */}

            <Flex flex={2.1} direction="column">


                <Flex flex={2.1}>
                    <Text ff='JF-Dot-Shinonome16' fw='bold' c='black' size='50px'>顧客名：佐藤 楓</Text>


                </Flex>
                <Flex flex={2.1}>


                </Flex>
            </Flex>
        </Flex>
    );
};

export default SupportCenter;
