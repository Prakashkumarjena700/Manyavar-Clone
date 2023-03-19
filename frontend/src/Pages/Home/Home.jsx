import React from 'react'
import styles from './Home.module.css'
import HomeBannerSlider from './HomeBannerSlider'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.homeMainContainer}>
      <HomeBannerSlider />
      <div className={styles.homeCollectionsDiv}>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Sherwani%20Category%20Tiles_%20Both%20device_12-01-2023-11-56?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>SHERWANI</h2>
        </div>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kurta%20pajama%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>KURTA PAJAMA</h2>
        </div>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Indo%20Western%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>INDO WESTERN</h2>
        </div>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Kurta%20Jacket%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>KURTA JACKET SETS</h2>
        </div>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Only%20Kurta%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>KURTAS</h2>
        </div>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Jacket%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>JACKETS</h2>
        </div>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Category%20Tiles%20%20Alia%20Replacement%20jpg_11-11-2022-07-36?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>LEHENGAS</h2>
        </div>
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Boys%20jpg_11-11-2022-07-36-2?$R%2DD%2DHP%2DCircle$" alt="" />
          <h2>BOYS</h2>
        </div>
      </div>

      <h1 className={styles.Home_New_Arrival_Headin}>New Arrivals</h1>
      <Tabs className={styles.Home_newArr_men_women}>
        <TabList>
          <Tab>MEN</Tab>
          <Tab>WOMEN</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
