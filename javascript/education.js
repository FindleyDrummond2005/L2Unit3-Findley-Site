var closed_edu_menu = document.querySelector(".closed_edu_menu");
var education_contents_1 = document.querySelector(".education_contents_1");
var education_contents_2 = document.querySelector(".education_contents_2");
var education_contents_3 = document.querySelector(".education_contents_3");
var education_contents_4 = document.querySelector(".education_contents_4");
var education_contents_5 = document.querySelector(".education_contents_5");
var one = true
var two = true
var three = true
var four = true
var five = true


function open_edu(open_edu_num)
{
    switch (open_edu_num)
{
    case 1:
        if (one == true)
        {
            one = false;
            two = true;
            three = true;
            four = true;
            five = true;
            closed_edu_menu.classList.add("open_edu_menu");
            closed_edu_menu.classList.remove("closed_edu_menu");
            education_contents_1.classList.remove("education_opener")
            education_contents_2.classList.add("education_opener")
            education_contents_3.classList.add("education_opener")
            education_contents_4.classList.add("education_opener")
            education_contents_5.classList.add("education_opener")
        }

        else
        {
            one = true;
            two = true;
            three = true;
            four = true;
            five = true;
            closed_edu_menu.classList.remove("open_edu_menu");
            closed_edu_menu.classList.add("closed_edu_menu");
            education_contents_1.classList.add("education_opener")
        }
    break;

    case 2:
        if (two == true)
        {
            one = true;
            two = false;
            three = true;
            four = true;
            five = true;
            closed_edu_menu.classList.add("open_edu_menu");
            closed_edu_menu.classList.remove("closed_edu_menu");
            education_contents_1.classList.add("education_opener")
            education_contents_2.classList.remove("education_opener")
            education_contents_3.classList.add("education_opener")
            education_contents_4.classList.add("education_opener")
            education_contents_5.classList.add("education_opener")
        }

        else
        {
            one = true;
            two = true;
            three = true;
            four = true;
            five = true;
            closed_edu_menu.classList.remove("open_edu_menu");
            closed_edu_menu.classList.add("closed_edu_menu");
            education_contents_2.classList.add("education_opener")
        }
    break;

    case 3:
        if (three  == true)
        {
            one = true;
            two = true;
            three = false;
            four = true;
            five = true;
            closed_edu_menu.classList.add("open_edu_menu");
            closed_edu_menu.classList.remove("closed_edu_menu");
            education_contents_1.classList.add("education_opener")
            education_contents_2.classList.add("education_opener")
            education_contents_3.classList.remove("education_opener")
            education_contents_4.classList.add("education_opener")
            education_contents_5.classList.add("education_opener")
        }

        else
        {
            one = true;
            two = true;
            three = true;
            four = true;
            five = true;
            closed_edu_menu.classList.remove("open_edu_menu");
            closed_edu_menu.classList.add("closed_edu_menu");
            education_contents_3.classList.add("education_opener")
        }
    break;

    case 4:
        if (four  == true)
        {
            one = true;
            two = true;
            three = true;
            four = false;
            five = true;
            closed_edu_menu.classList.add("open_edu_menu");
            closed_edu_menu.classList.remove("closed_edu_menu");
            education_contents_1.classList.add("education_opener")
            education_contents_2.classList.add("education_opener")
            education_contents_3.classList.add("education_opener")
            education_contents_4.classList.remove("education_opener")
            education_contents_5.classList.add("education_opener")
        }

        else
        {
            one = true;
            two = true;
            three = true;
            four = true;
            five = true;
            closed_edu_menu.classList.remove("open_edu_menu");
            closed_edu_menu.classList.add("closed_edu_menu");
            education_contents_4.classList.add("education_opener")
        }
    break;
    
    case 5:
        if (five  == true)
        {
            one = true;
            two = true;
            three = true;
            four = true;
            five = false;
            closed_edu_menu.classList.add("open_edu_menu");
            closed_edu_menu.classList.remove("closed_edu_menu");
            education_contents_1.classList.add("education_opener")
            education_contents_2.classList.add("education_opener")
            education_contents_3.classList.add("education_opener")
            education_contents_4.classList.add("education_opener")
            education_contents_5.classList.remove("education_opener")
        }
    
        else
        {
            one = true;
            two = true;
            three = true;
            four = true;
            five = true;
            closed_edu_menu.classList.remove("open_edu_menu");
            closed_edu_menu.classList.add("closed_edu_menu");
            education_contents_5.classList.add("education_opener")
        }

    break;
}
}