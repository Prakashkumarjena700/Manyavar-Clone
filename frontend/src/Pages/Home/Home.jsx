import React from 'react'
import styles from './Home.module.css'
import HomeBannerSlider from './HomeBannerSlider'
import { menData, womenData } from './data'

import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HomeCardSlider from './HomeCardSlider'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  const [newArrivalToggle, SetNewArrivalToggle] = useState(true)

  const [PiecesKurtasetToggle, SetPiecesKurtaSetToggle] = useState(true)
  const [PiecesKurtaToggle, SetPiecesKurtaToggle] = useState(false)
  const [PiecesWesternToggle, SetPiecesWesternToggle] = useState(false)
  const [PiecesSherwaniToggle, SetPiecesSherwaniToggle] = useState(false)
  const [PiecesJacketToggle, SetPiecesJacketToggle] = useState(false)


  return (
    <div className={styles.homeMainContainer}>
      <Navbar />
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
      <div>
        <h1 className={styles.Home_New_Arrival_Headin}>New Arrivals</h1>


        <div className={styles.Home_newArr_men_women}>
          <button onClick={() => SetNewArrivalToggle(true)} style={newArrivalToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }}>MEN </button>
          <button onClick={() => SetNewArrivalToggle(false)} style={!newArrivalToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >WOMEN</button>
        </div>
        <div>{newArrivalToggle ?
          <div className={styles.newArrival_card_con}>
            {
              menData.map((ele) => <div className={styles.container_1_cards} key={ele.image}>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src={ele.image} alt="" />
                  </div>

                  <div className={styles.HomeCardoverlay}>
                    <div className={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>{ele.title}</p>
                <h5>{ele.price}</h5>
              </div>)
            }
          </div>

          :

          <div className={styles.newArrival_card_con}>
            {
              womenData.map((ele) => <div key={ele.image}>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src={ele.image} alt="" />
                  </div>

                  <div className={styles.HomeCardoverlay}>
                    <div className={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>{ele.title}</p>
                <h5>Rs {ele.price}</h5>
              </div>)
            }
          </div>
        }
        </div>

      </div>
      <div className={styles.HomeContainer2}>
        <h1 className={styles.Home_New_Arrival_Headin}>Pieces Customers Love</h1>

        <div className={styles.home_viewAll}>VIEW ALL</div>


        <div className={styles.Home_newArr_con_2_buttons}>
          <button onClick={() => {
            SetPiecesKurtaSetToggle(true)
            SetPiecesKurtaToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesSherwaniToggle(false)
            SetPiecesJacketToggle(false)

          }} style={PiecesKurtasetToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }}>KURTA SETS </button>
          <button onClick={() => {
            SetPiecesKurtaToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesSherwaniToggle(false)
            SetPiecesJacketToggle(false)
          }} style={PiecesKurtaToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >KURTAS</button>
          <button onClick={() => {
            SetPiecesWesternToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesKurtaToggle(false)
            SetPiecesSherwaniToggle(false)
            SetPiecesJacketToggle(false)
          }} style={PiecesWesternToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >INDOWESTERN</button>
          <button onClick={() => {
            SetPiecesSherwaniToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesKurtaToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesJacketToggle(false)
          }} style={PiecesSherwaniToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >SHERWANI</button>
          <button onClick={() => {
            SetPiecesJacketToggle(true)

            SetPiecesKurtaSetToggle(false)
            SetPiecesKurtaToggle(false)
            SetPiecesWesternToggle(false)
            SetPiecesSherwaniToggle(false)
          }} style={PiecesJacketToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >JACKETS</button>
        </div>
        <div className={styles.Home_newArr_con_2_div}>
          <div>{PiecesKurtasetToggle ?
            <div className={styles.newArrival_card_con}>
              {
                menData.map((ele) => <div key={ele.image} className={styles.container_2_card}>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src={ele.image} alt="" />
                    </div>

                    <div className={styles.HomeCardoverlay}>
                      <div className={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>{ele.title}</p>
                  <h5>Rs {ele.price}</h5>
                </div>)
              }
            </div>

            : PiecesKurtaToggle ?

              <div className={styles.newArrival_card_con}>
                {
                  womenData.map((ele) => <div key={ele.image}>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src={ele.image} alt="" />
                      </div>

                      <div className={styles.HomeCardoverlay}>
                        <div className={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>{ele.title}</p>
                    <h5>Rs {ele.price}</h5>
                  </div>)
                }
              </div>
              : PiecesWesternToggle ?
                <div className={styles.newArrival_card_con}>
                  {
                    menData.map((ele) => <div key={ele.image}>
                      <div className={styles.HomeCard}>
                        <div className={styles.HomeCardImg_Div}>
                          <img src={ele.image} alt="" />
                        </div>

                        <div className={styles.HomeCardoverlay}>
                          <div className={styles.HomeCardText}>
                            <p>View</p>
                          </div>
                        </div>
                      </div>
                      <p>{ele.title}</p>
                      <h5>Rs {ele.price}</h5>
                    </div>)
                  }
                </div>
                : PiecesSherwaniToggle ?
                  <div className={styles.newArrival_card_con}>
                    {
                      womenData.map((ele) => <div key={ele.image}>
                        <div className={styles.HomeCard}>
                          <div className={styles.HomeCardImg_Div}>
                            <img src={ele.image} alt="" />
                          </div>

                          <div className={styles.HomeCardoverlay}>
                            <div className={styles.HomeCardText}>
                              <p>View</p>
                            </div>
                          </div>
                        </div>
                        <p>{ele.title}</p>
                        <h5>Rs {ele.price}</h5>
                      </div>)
                    }

                  </div> :
                  <div className={styles.newArrival_card_con}>
                    {
                      menData.map((ele) => <div key={ele.image}>
                        <div className={styles.HomeCard}>
                          <div className={styles.HomeCardImg_Div}>
                            <img src={ele.image} alt="" />
                          </div>

                          <div className={styles.HomeCardoverlay}>
                            <div className={styles.HomeCardText}>
                              <p>View</p>
                            </div>
                          </div>
                        </div>
                        <p>{ele.title}</p>
                        <h5>Rs {ele.price}</h5>
                      </div>)
                    }

                  </div>
          }
          </div>

        </div >
        <div className={styles.HomeContainer3}>
          <h1 className={styles.Home_New_Arrival_Headin}>Attending a Wedding?</h1>
          <p>Like Ranveer Says, Shaadi Hai? #Taiyaar Hokar Aayiye</p>
          <div className={styles.Attending_Wedding}>
            <div>
              <img className={styles.Container3_img_1} src="https://manyavar.scene7.com/is/image/manyavarstage/Shop%20as%20a%20Groom%20jpg_11-11-2022-04-47?$R%2DD%2DHP%2DAW$" alt="" />
              <img className={styles.Container3_img_2} src="https://manyavar.scene7.com/is/image/manyavarstage/As%20a%20the%20groom%20jpg_11-11-2022-10-26?$R%2DM%2DHP%2DAW$" alt="" />
            </div>
            <div>
              <img className={styles.Container3_img_1} src="https://manyavar.scene7.com/is/image/manyavarstage/Shop%20as%20a%20Guest%20jpg_11-11-2022-04-47?$R%2DD%2DHP%2DAW$" alt="" />
              <img className={styles.Container3_img_2} src="https://manyavar.scene7.com/is/image/manyavarstage/As%20a%20guest%20jpg_11-11-2022-10-26?$R%2DM%2DHP%2DAW$" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.moheyBanner}>
          <img src="https://static01.manyavar.com/uploads/Newhometemplate/images//Manvayar-Crest-Mohey_Horizontal.png" alt="" />
          <div>
            <img className={styles.mohey_image1} src="https://manyavar.scene7.com/is/image/manyavarstage/Mohey%20Banner%20Dektop%20jpg_11-11-2022-04-58?$R%2DD%2DHP%2DMB$" alt="" />
            <img className={styles.mohey_image2} src="https://manyavar.scene7.com/is/image/manyavarstage/Lehenga%20Hero%20Banner%20_Mobile%20jpg_09-11-2022-09-18?$R%2DM%2DHP%2FMLP%2FWLP%2DB$" alt="" />
          </div>
        </div>
      </div >
      <div className={styles.container_4}>
        <h1 className={styles.Home_New_Arrival_Headin}>Pieces Customers Love</h1>
        <div className={styles.home_viewAll}>VIEW ALL</div>
        <div className={styles.newArrival_card_con}>
          {
            womenData.map((ele) => <div key={ele.image}>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src={ele.image} alt="" />
                </div>

                <div className={styles.HomeCardoverlay}>
                  <div className={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>{ele.title}</p>
              <h5>Rs {ele.price}</h5>
            </div>)
          }
        </div>
      </div>
      <div className={styles.contaoner_5}>

        <img className={styles.container5_img_1} src="https://manyavar.scene7.com/is/image/manyavarstage/Book%20an%20appiontment%20JPG_19-10-2022-12-23?$R%2DD%2DHP%2DBAA$" alt="" />
        <img className={styles.container5_img_2} src="https://manyavar.scene7.com/is/image/manyavarstage/Book%20an%20appointment%20jpg_11-11-2022-11-26?$R%2DM%2DHP%2DBAA$" alt="" />
      </div>
      <div className={styles.container_6}>
        <h1 className={styles.Home_New_Arrival_Headin}>Shop By Collections</h1>
        <p>A wedding is a beautiful life event with many intricate traditions. Every occasion calls for that perfect celebration outfit, select your from below.</p>
        <div className={styles.container_6_card_parent}>
          <div>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Sangeet%20jpg_11-11-2022-05-281?$R%2DD%2FM%2DHP%2DSBC$" alt="" />
          </div>
          <div>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Engagement%20jpg_11-11-2022-05-281?$R%2DD%2FM%2DHP%2DSBC$" alt="" />
          </div>
          <div>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Reception%20jpg_11-11-2022-05-281?$R%2DD%2FM%2DHP%2DSBC$" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
