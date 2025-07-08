import React from 'react';
import {Button, Flex, Image, ScrollArea, Stack, Table, Text} from '@mantine/core';
import '@mantine/core/styles.css';
import './SupportCenter.css';
import './SupportCenterCustomerList.css';
import '../fonts.css';

const SupportCenter : React.FC = () => {

    return (
        <>
        {/*<img src="assets/support-center/電話.png" style={{position: 'absolute', width: '100%', opacity: '0.5'}}></img> */ }
        <img src="assets/support-center/電話.png" style={{position: 'absolute', width: '100%', opacity: '0.1'}}></img>

            <Flex direction="row" style={{height: '100%', width: '100%',backgroundColor:'#dfdfe0'}}>
                {/* 左側 顧客一覧 */}
                <Flex flex={1}  direction="column">
                    <Flex pt={10} pl={10} >
                      {/* 笑み道夫 */}
                        <Image w="20%" h="auto" style={{ objectFit: 'contain', objectPosition:'top' , display: 'block' }} src="assets/support-center/operator-placeholder.png" />

                        <Stack gap={0} pt={20} pl={10}>
                            <Text ff='JF-Dot-Shinonome16' fw='bold' c='black' >笑み道夫</Text>
                            <Text ff='JF-Dot-Shinonome16' fw='bold' c='black' >社員 ID:063</Text>
                        </Stack>
                    </Flex>
                    <Flex pt={25} pl={10}>
                      {/* 連絡先 留守番電話 */}
                        <Button h={30} w={100}>連絡先</Button>
                    </Flex>

                    <Flex pt={12} pl={10}>

                        <ScrollArea h={420}>
                      {/* 顧客一覧22     */}
                        <Table verticalSpacing={0}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th className="headerCell" style={{ pl:0,pr:0}}>コード</Table.Th>
                                    <Table.Th className="headerCell">分類</Table.Th>
                                    <Table.Th className="headerCell">ふりがな</Table.Th>
                                    <Table.Th className="headerCell">名前</Table.Th>
                                    <Table.Th className="headerCell">敬称</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Td>0001</Table.Td>
                                    <Table.Td>一般</Table.Td>
                                    <Table.Td>たなか</Table.Td>
                                    <Table.Td>田中太郎</Table.Td>
                                    <Table.Td>様</Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td>0002</Table.Td>
                                    <Table.Td>法人</Table.Td>
                                    <Table.Td>すずき</Table.Td>
                                    <Table.Td>鈴木一郎</Table.Td>
                                    <Table.Td>御中</Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
            </ScrollArea>
                    </Flex>

                    <Flex flex={0.07} >
                      {/* 終了ボタン */}
                    </Flex>
                </Flex>

                {/* 右側 顧客詳細 */}

                <Flex flex={2.1}  direction="column">


                  <Flex flex={2.1} >
                      <Text ff='JF-Dot-Shinonome16' fw='bold' c='black'>顧客名：佐藤 楓</Text>


                  </Flex>
                  <Flex flex={2.1} >



                  </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default SupportCenter;