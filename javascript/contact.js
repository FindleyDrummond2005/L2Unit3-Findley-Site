var email_hover = document.querySelector(".email_img")
var email_text = document.querySelector(".email_text_off")

var blueSky_hover = document.querySelector(".blueSky_img")
var blueSky_text = document.querySelector(".blueSky_text_off")

var whatsapp_hover = document.querySelector(".whatsapp_img")
var whatsapp_text = document.querySelector(".whatsapp_text_off")

var linkedin_hover =  document.querySelector(".linkedin_img")
var linkedin_text = document.querySelector(".linkedin_text_off")


function img_changer(img_num)
{
    switch(img_num)
    {
        case 1:
            email_hover.classList.add("email_onhover")
        break;

        case 2:
            blueSky_hover.classList.add("blueSky_onhover")
        break;

        case 3:
            whatsapp_hover.classList.add("whatsapp_onhover")
        break;

        case 4:
            linkedin_hover.classList.add("linkedin_onhover")
        break;
    }
}

function img_normaliser(img_num)
{
    switch(img_num)
    {
        case 1:
            email_hover.classList.remove("email_onhover")
        break;

        case 2:
            blueSky_hover.classList.remove("blueSky_onhover")
        break;

        case 3:
            whatsapp_hover.classList.remove("whatsapp_onhover")
        break;

        case 4:
            linkedin_hover.classList.remove("linkedin_onhover")
        break;
    }
}

function show_info(img_num)
{
    switch(img_num)
    {
        case 1:
            email_hover.classList.add("email_onclick")
            email_text.classList.add("email_text_on")
        break;

        case 2:
            blueSky_hover.classList.add("blueSky_onclick")
            blueSky_text.classList.add("blueSky_text_on")
        break;

        case 3:
            whatsapp_hover.classList.add("whatsapp_onclick")
            whatsapp_text.classList.add("whatsapp_text_on")
        break;

        case 4:
            linkedin_hover.classList.add("linkedin_onclick")
            linkedin_text.classList.add("linkedin_text_on")
        break;
    }
}