import React from 'react'
import styles from './Home.module.css'
import HomeBannerSlider from './HomeBannerSlider'
import { menData, womenData } from './data'

import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HomeCardSlider from './HomeCardSlider'

export default function Home() {
  const [newArrivalToggle, SetNewArrivalToggle] = useState(true)

  const [PiecesKurtasetToggle, SetPiecesKurtaSetToggle] = useState(true)
  const [PiecesKurtaToggle, SetPiecesKurtaToggle] = useState(false)
  const [PiecesWesternToggle, SetPiecesWesternToggle] = useState(false)
  const [PiecesSherwaniToggle, SetPiecesSherwaniToggle] = useState(false)
  const [PiecesJacketToggle, SetPiecesJacketToggle] = useState(false)

  console.log(menData)

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
          <button onClick={() => SetNewArrivalToggle(true)} style={newArrivalToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }}>Men </button>
          <button onClick={() => SetNewArrivalToggle(false)} style={!newArrivalToggle ? { borderBottom: "3px solid grey" } : { borderBottom: 'unset' }} >Women</button>
        </div>
        <div>{newArrivalToggle ?
          <div className={styles.newArrival_card_con}>
            {
              menData.map((ele) => <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src={ele.image} alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>{ele.title}</p>
                <h5>Rs {ele.price}</h5>
              </div>)
            }
          </div>

          :

          <div className={styles.newArrival_card_con}>
            {
              womenData.map((ele) => <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src={ele.image} alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
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
      <div>
        <h1 className={styles.Home_New_Arrival_Headin}>Pieces Customers Love</h1>

        <h2>VIEW ALL</h2>

        <div className={styles.Home_newArr_men_women}>
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

        <div>{PiecesKurtasetToggle ?
          <div className={styles.newArrival_card_con}>
            <div>
              Kurta sets
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>
            <div>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>
            <div>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>
            <div>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>
            <div>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>
            <div>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>
            <div>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>
            <div>
              <div className={styles.HomeCard}>
                <div className={styles.HomeCardImg_Div}>
                  <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                </div>

                <div class={styles.HomeCardoverlay}>
                  <div class={styles.HomeCardText}>
                    <p>View</p>
                  </div>
                </div>
              </div>
              <p>Striking ludo wester maroon</p>
              <h5>R 15999</h5>
            </div>




          </div>

          : PiecesKurtaToggle ?

            <div className={styles.newArrival_card_con}>
              <div>
                Kurtas
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/14240/detailimages/enigmatic-rani-bridal-lehenga-unlb4306-425-2.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>
              <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>
              <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>
              <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>
              <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>
              <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>
              <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>
              <div>
                <div className={styles.HomeCard}>
                  <div className={styles.HomeCardImg_Div}>
                    <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                  </div>

                  <div class={styles.HomeCardoverlay}>
                    <div class={styles.HomeCardText}>
                      <p>View</p>
                    </div>
                  </div>
                </div>
                <p>Striking ludo wester maroon</p>
                <h5>R 15999</h5>
              </div>

            </div>
            : PiecesWesternToggle ?
              <div className={styles.newArrival_card_con}>
                <div>
                  western
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/14240/detailimages/enigmatic-rani-bridal-lehenga-unlb4306-425-2.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>
                <div>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>
                <div>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>
                <div>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>
                <div>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>
                <div>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>
                <div>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>
                <div>
                  <div className={styles.HomeCard}>
                    <div className={styles.HomeCardImg_Div}>
                      <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                    </div>

                    <div class={styles.HomeCardoverlay}>
                      <div class={styles.HomeCardText}>
                        <p>View</p>
                      </div>
                    </div>
                  </div>
                  <p>Striking ludo wester maroon</p>
                  <h5>R 15999</h5>
                </div>

              </div>
              : PiecesSherwaniToggle ?
                <div className={styles.newArrival_card_con}>
                  <div>
                    Sherwani
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/14240/detailimages/enigmatic-rani-bridal-lehenga-unlb4306-425-2.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>

                </div> :
                <div className={styles.newArrival_card_con}>
                  <div>
                    Jacket
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/14240/detailimages/enigmatic-rani-bridal-lehenga-unlb4306-425-2.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>
                  <div>
                    <div className={styles.HomeCard}>
                      <div className={styles.HomeCardImg_Div}>
                        <img src="https://static01.manyavar.com/uploads/dealimages/11305/detailimages/robust-red-indo-western-wear-cpiw509-307-8.jpg" alt="" />
                      </div>

                      <div class={styles.HomeCardoverlay}>
                        <div class={styles.HomeCardText}>
                          <p>View</p>
                        </div>
                      </div>
                    </div>
                    <p>Striking ludo wester maroon</p>
                    <h5>R 15999</h5>
                  </div>

                </div>
        }</div>

      </div>
      <div>
        <h1 className={styles.Home_New_Arrival_Headin}>Attending a Wedding?</h1>
        <p>Like Ranveer Says, Shaadi Hai? #Taiyaar Hokar Aayiye</p>
        <div className={styles.Attending_Wedding}>
          <div>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Shop%20as%20a%20Groom%20jpg_11-11-2022-04-47?$R%2DD%2DHP%2DAW$" alt="" />
          </div>
          <div>
            <img src="https://manyavar.scene7.com/is/image/manyavarstage/Shop%20as%20a%20Guest%20jpg_11-11-2022-04-47?$R%2DD%2DHP%2DAW$" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.moheyBanner}>
        <img src="https://static01.manyavar.com/uploads/Newhometemplate/images//Manvayar-Crest-Mohey_Horizontal.png" alt="" />
        <div>
          <img src="https://manyavar.scene7.com/is/image/manyavarstage/Mohey%20Banner%20Dektop%20jpg_11-11-2022-04-58?$R%2DD%2DHP%2DMB$" alt="" />
        </div>
      </div>
    </div>
  )
}
