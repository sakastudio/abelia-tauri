import React from 'react';
import {Flex} from '@mantine/core';
import '@mantine/core/styles.css';
import './SupportCenter.css';

const SupportCenter : React.FC = () => {

    return (
        <>

            <img src="assets/support-center/電話.png"
                 style={{position: 'absolute', width: '100%', opacity: '0.5'}}></img>

            <Flex direction="row" style={{height: '100%', width: '100%'}}>

                <Flex flex={1} style={{backgroundColor: '#f5ed7f'}} direction="column">
                    <Flex flex={0.16} style={{backgroundColor: 'black'}}>
                      {/* 笑み道夫 */}
                    </Flex>
                    <Flex flex={0.05} style={{backgroundColor: 'white'}}>
                      {/* 連絡先 留守番電話 */}
                    </Flex>

                    <Flex flex={0.632} style={{backgroundColor: 'black'}}>
                      {/* 顧客一覧 */}
                    </Flex>

                    <Flex flex={0.07} style={{backgroundColor: 'white'}}>
                      {/* 終了ボタン */}
                    </Flex>
                </Flex>

                <Flex flex={2.1} style={{backgroundColor: '#7ff5f3'}} direction="column">


                  <Flex flex={2.1} style={{backgroundColor: '#f6b26b'}}>


                  </Flex>
                  <Flex flex={2.1} style={{backgroundColor: '#6fa8dc'}}>


                  </Flex>


                </Flex>
            </Flex>
        </>
    );
};

export default SupportCenter;