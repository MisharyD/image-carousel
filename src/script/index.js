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
    let timeoutId

    function createCarousel(imgArray)
    {
        const carousalContainer = document.querySelector(".carousal-container.structure").cloneNode(true);
        carousalContainer.classList.remove("hidden", "structure");

        const imageContainer = carousalContainer.querySelector(".image-container.structure");
        imageContainer.classList.remove("structure", "hidden");

        const navDotContainer = carousalContainer.querySelector(".navigation-dots-container.structure");
        navDotContainer.classList.remove("structure", "hidden");

        //add images and navigation dots
        for(let i=0; i<imgArray.length; i++)
            {
                //create navigation dot for the image
                const navDot = document.querySelector(".navigation-dot.structure").cloneNode(true)
                navDot.classList.remove("hidden", "structure");
                navDot.setAttribute("id", "nd" + i);

                //add listener to nav dot
                navDot.addEventListener("click", handleNavSelect);

                //create an image
                const img = document.querySelector(".carousal-image.structure").cloneNode(true);
                img.src = imgArray[i];    
                img.classList.remove("structure");
                //img.classList.add("hidden");
                img.setAttribute("id", "im" + i);

                //append elements
                navDotContainer.append(navDot);
                imageContainer.append(img);
            }

        //add event listener to previuos and next buttons
        carousalContainer.querySelector(".next").addEventListener("click", moveToNextImage);
        carousalContainer.querySelector(".previous").addEventListener("click", moveToPrevImage);

        //display first image
        const img = carousalContainer.querySelector("#im0");
        img.classList.remove("hidden");

        const navDot = carousalContainer.querySelector("#nd0")
        navDot.classList.add("selected-navigation-dot");

        //switch picture every 3 seconds
        timeoutId = setTimeout(moveToNextImage, 3000);

        return carousalContainer;
    }
    
    //get image id and call display Image
    function handleNavSelect(e)
    {
        const selectedNavButton = e.target
        const id = selectedNavButton.getAttribute("id").slice(2);

        displayImage(id)
    }

    function displayImage(id)
    {
        //remove previous image and it's nav dot

        //get previous dot and remove selected visuals 
        const prevDot = document.querySelector(".selected-navigation-dot");
        prevDot.classList.remove("selected-navigation-dot");

        //get prev id
        const prevId = prevDot.getAttribute("id").slice(2); //number only
        
        //get prev img and hide it
        const prevImg = document.querySelector("#im" + prevId);
        prevImg.classList.add("hidden");

        //show selected image

        //get img
        const img = document.querySelector("#im" + id);

        //show image and dot
        img.classList.remove("hidden"); 
        const selectedDot = document.querySelector("#nd" + id);
        selectedDot.classList.add("selected-navigation-dot");
    }

    function moveToNextImage()
    {
        //reset timer
        startTimeout()

        //get container, this is needed because otherwise the structure one will be selected
        const currNav = document.querySelector(".selected-navigation-dot");
        const carousalContainer = currNav.closest(".carousal-container");

        //get id number only
        const currId = currNav.getAttribute("id").slice(2);
        
        //if it is not the last image then display the next image, other wise display the first image
        const nextImage = carousalContainer.querySelector("#im" + (parseInt(currId)+1) ) ;
        if(nextImage)
            displayImage(parseInt(currId) + 1);
        else
            displayImage(0);
    }

    function moveToPrevImage()
    {
        //reset timer
        startTimeout()

        //get container, this is needed because otherwise the structure one will be selected
        const currNav = document.querySelector(".selected-navigation-dot");
        const carousalContainer = currNav.closest(".carousal-container");

        //get id number only
        const currId = currNav.getAttribute("id").slice(2);
        
        //if it is not the last image then display the next image, other wise do nothing because it will be a pain to get the last image
        const prevImage = carousalContainer.querySelector("#im" + (parseInt(currId)-1) ) ;
        if(prevImage)
            displayImage(parseInt(currId) - 1);
    }

    function startTimeout()
    {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(moveToNextImage, 3000);
    }

    return { createCarousel }
})()

document.querySelector(".container").append(carousal.createCarousel([img1, img2, img3, img4, img5]));