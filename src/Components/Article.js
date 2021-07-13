import { useState } from 'react';
import fox1 from '../Assets/Img/Fox1.jpg';
import fox2 from '../Assets/Img/Fox2.jpg';
import fox3 from '../Assets/Img/Fox3.jpg';
import fox4 from '../Assets/Img/Fox4.jpg';
import fox5 from '../Assets/Img/Fox5.jpg';
import fox6 from '../Assets/Img/Fox6.jpg';

function Article() {
    const [mainImg, setMainImg] = useState(fox1)

    const changeMaingImg = (e) => {
            setMainImg(e.target.src);
    }
    
// An alternative verstion
// function for 1st opiton
    // const smallImageClicked = (e) => {
    //     setMainImage(event.target.src);
    // }

    // const images = [fox1, fox2, fox3, fox4, fox5, fox6];
    // const imagesList = images.map((image, index) => {
    //     <div key={index} className="col px-1">
// 1st option
    //         <img src={image} onClick={smallImageClicked}/>
// 2nd option
    //         <img src={image} onClick={() => setMainImage(image)}/>
    //     </div>
    // }) 
// Now you can put {imagesList} instead of 6 divs with images

    return (
        <div className="row">
            <div className="col mt-3">
                <h2>This is an article page</h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col mb-2 px-1">
                            <img src={mainImg} alt={'main foto'} className="img-fluid" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col px-1">
                            <img src={fox1} alt={'fox1'} className="img-fluid" onClick={changeMaingImg}/>
                        </div>
                        <div className="col px-1">
                            <img src={fox2} alt={'fox2'} className="img-fluid" onClick={changeMaingImg}/>
                        </div>
                        <div className="col px-1">
                            <img src={fox3} alt={'fox3'} className="img-fluid" onClick={changeMaingImg}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col px-1">
                            <img src={fox4} alt={'fox4'} className="img-fluid" onClick={changeMaingImg}/>
                        </div>
                        <div className="col px-1">
                            <img src={fox5} alt={'fox5'} className="img-fluid" onClick={changeMaingImg}/>
                        </div>
                        <div className="col px-1">
                            <img src={fox6} alt={'fox6'} className="img-fluid" onClick={changeMaingImg}/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <p>Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).</p>
                    <p>Twelve species belong to the monophyletic "true foxes" group of genus Vulpes. Approximately another 25 current or extinct species are always or sometimes called foxes; these foxes are either part of the paraphyletic group of the South American foxes, or of the outlying group, which consists of the bat-eared fox, gray fox, and island fox.</p>
                    <p>Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies.[2] The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.</p>
                    <p><a href="https://en.wikipedia.org/wiki/Fox">Read more</a></p>
                </div>
            </div>
        </div>
    )
}

export default Article;