import React from 'react'
import '../Components/singers.css'

const Singers = () => {
    const handelChange =()=>{

    }
    return (
        <>
            <div className='mainData'>
                <div className="SingerCard">
                    <div className="image_div">
                        <img className="main-image" src="https://m.media-amazon.com/images/M/MV5BYjM5YTQ0ZGYtMWExZi00MTFmLTg0YjUtZDcyMGNiYzE5MmNmL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" alt="" />
                    </div>
                    <div className="content_div"><div className="name_postdiv">
                        <h1 className="large">The Wedding </h1>
                        <p className="small">Singer</p></div>
                        <p className="medium_text" style={{marginBottom: "0.5rem"}}>Location</p>
                        <div className='singerContain'>
                            <p className="medium_text">Event Booking</p><p className="small" style={{fontStyle :"italic",fontWeight: "600", paddingRight: "7px"}}>2963</p>
                        </div>
                        <div className="image_url_div">
                            <div>
                                <img className="thumbnail" src="https://m.media-amazon.com/images/M/MV5BYjM5YTQ0ZGYtMWExZi00MTFmLTg0YjUtZDcyMGNiYzE5MmNmL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" alt="" />
                            </div>
                            <div>
                                <img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&amp;resize=640:*" alt="" />
                            </div>
                            <div>
                                <img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/piscescelebs-1582312966.png?crop=0.293xw:0.587xh;0.0256xw,0.0737xh&amp;resize=1200:*" alt="" />
                            </div>
                            <div>
                                <img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&amp;resize=640:*" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="selectBTN">
                        <p id="text" className="large sample" onChange={handelChange}>SELECT</p>
                    </div>
                </div>
                <div className="SingerCard">
                    <div className="image_div">
                        <img className="main-image" src="https://m.media-amazon.com/images/M/MV5BMWE3YTcyZjEtZGE3ZC00NDgwLWFkZjQtOTQyNDM4MGZkYjMwXkEyXkFqcGdeQXVyMTE3MTMwODEy._V1_.jpg" alt="" />
                    </div>
                    <div className="content_div"><div className="name_postdiv">
                        <h1 className="large">The Masked</h1>
                        <p className="small">Singer</p></div>
                        <p className="medium_text" style={{marginBottom: "0.5rem"}}>Location</p>
                        <div className='singerContain'>
                            <p className="medium_text">Event Booking</p><p className="small" style={{fontStyle :"italic",fontWeight: "600", paddingRight: "7px"}}>2963</p>
                        </div>
                        <div className="image_url_div">
                            <div>
                                <img className="thumbnail" src="https://m.media-amazon.com/images/M/MV5BYjM5YTQ0ZGYtMWExZi00MTFmLTg0YjUtZDcyMGNiYzE5MmNmL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" alt="" />
                            </div>
                            <div>
                                <img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&amp;resize=640:*" alt="" />
                            </div>
                            <div>
                                <img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/piscescelebs-1582312966.png?crop=0.293xw:0.587xh;0.0256xw,0.0737xh&amp;resize=1200:*" alt="" />
                            </div>
                            <div>
                                <img className="thumbnail" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&amp;resize=640:*" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="selectBTN">
                        <p id="text" className="large sample">SELECT</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Singers