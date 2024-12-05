function loginClose(value)
{
    if(value === 1)
    {
        document.getElementById('login').style.display = "flex";
    }
    else
    {
        document.getElementById('login').style.display = "none";
    }
}

function closeOpen(value)
{
    if(value === 1)
    {
        document.getElementById('close').style.display = "flex";
    }
    else
    {
        document.getElementById('close').style.display = "none";
    }
}

function newFunc(value)
{
    if(value === 1)
    {
        document.getElementById('close').style.display = "none";
        document.getElementById('login').style.display = "flex";
    }
    else
        {
            document.getElementById('close').style.display = "none";
            document.getElementById('login').style.display = "none";
        }
}

