import "../style/reset.css"
import "../style/index.css"
import img1 from "../assets/images/bali.jpg"
import img2 from "../assets/images/lake.jpg"
import img3 from "../assets/images/leaves.jpg"
import img4 from "../assets/images/mountains.jpg"
import img5 from "../assets/images/sea.jpg"

/* 
navigation dot ids start with nd followed by a number
images ids start with im followed by a number
*/ 

const carousal = (function()
{

    function createCarousel(imgArray)
    {
        const carousalContainer = document.querySelector(".carousal-container");

        for(let i=0; i<imgArray.length; i++)
            {
                //create navigation dot for the image
                const navDot = document.querySelector(".navigation-dot.structure")
                navDot.classList.remove("hidden", "structure");
                navDot.setAttribute("nd" + i);

                //add listener to nav dot
                navDot.addEventListener("click", handleImageSelect);

                //create an image
                const img = document.querySelector(".carousal-image.structure");
                img.classList.remove("structure");
                img.setAttribute("im" + i);
            }
    
        //for every image:
            //create navigation dot and add it to dot container and assign it an id, add event listener that calls display image
            //create an image with class hidden and add it to image container and assign it an id
    }
    
    //get image id and call display Image
    function handleImageSelect()
    {
    
    }

    function displayImage(imageId)
    {

    }

    function moveToNextImage()
    {

    }

    function moveToPrevImage()
    {

    }

    createCarousel([img1, img2, img3, img4, img5]);
})()