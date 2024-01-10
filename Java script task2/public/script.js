function myfunction() {
    let status = true
    let username = document.getElementById('fname').value;

    if (username === "") {
        document.getElementById('span1').innerHTML = "*Required";
        status = false;
    }
    else {
        document.getElementById('span1').innerHTML = "";
    }
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let gen1 = selectedGender ? selectedGender.value : "";

    if (gen1 == "") {
        document.getElementById('span2').innerHTML = "*Required";
        status = false;
    }
    else {
        document.getElementById("span2").innerHTML = "";
    }

    let mail = document.getElementById('mail').value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/

    if (mail === "") {
        document.getElementById('span3').innerHTML = "*Required";
        status = false;

    } else if (!pattern.test(mail)) {
        document.getElementById('span3').innerHTML = "Invalid mail";
        status = false;

    }
    else {
        document.getElementById('span3').innerHTML = "";
    }

    let mblnumber = document.getElementById('number').value;

    if (mblnumber == "") {
        document.getElementById('span4').innerHTML = "*Required";
        status = false;

    }
    else if (mblnumber.length !== 10) {
        document.getElementById('span4').innerHTML = "Invalid number";
        status = false;

    }

    else {
        document.getElementById('span4').innerHTML = "";
    }

    let date = document.getElementById('dob').value;

    if (date == "") {
        document.getElementById('span5').innerHTML = "*Required";
        status = false;
    }
    else {
        document.getElementById('span5').innerHTML = "";
    }
    let nation = document.getElementById('form_nation').value;

    if (nation == "") {
        document.getElementById('span6').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span6').innerHTML = "";
    }
    let degree = document.getElementById('form_degree').value;

    if (degree == "") {
        document.getElementById('span7').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span7').innerHTML = "";
    }
    let branch = document.getElementById('form_branch').value;

    if (branch == "") {
        document.getElementById('span8').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span8').innerHTML = "";
    }
    let year = document.getElementById('form_year').value;

    if (year == "") {
        document.getElementById('span9').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span9').innerHTML = "";
    }
    let semester = document.getElementById('form_sem').value;

    if (semester == "") {
        document.getElementById('span10').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span10').innerHTML = "";
    }

    let language = []
    let lang1 = document.getElementById('lang1')
    let lang2 = document.getElementById('lang2')
    let lang3 = document.getElementById('lang3')
    if (lang1.checked) {
        language.push(lang1.value)
    }
    if (lang2.checked) {
        language.push(lang2.value)
    }
    if (lang3.checked) {
        language.push(lang3.value)
    }

    if (language == "") {
        document.getElementById('span11').innerHTML = "*Required";
        status = false;


    }
    else {
        document.getElementById('span11').innerHTML = "";
    }

    let admission = document.getElementById('form_admission').value;

    if (admission == "") {
        document.getElementById('span12').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span12').innerHTML = "";
    }

    let father = document.getElementById('fathername').value;

    if (father == "") {
        document.getElementById('span13').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span13').innerHTML = "";
    }

    let father_occupation = document.getElementById('Occupation').value;

    if (father_occupation == "") {
        document.getElementById('span14').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span14').innerHTML = "";
    }

    let income = document.getElementById('income').value;

    if (income == "") {
        document.getElementById('span15').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span15').innerHTML = "";
    }
    let mother = document.getElementById('mother name').value;

    if (mother == "") {
        document.getElementById('span16').innerHTML = "*Required";
        status = false;

    }
    else {
        document.getElementById('span16').innerHTML = "";
    }
    let cntnumber = document.getElementById('num').value;

    if (cntnumber == "") {
        document.getElementById('span17').innerHTML = "*Required";
        status = false;

    } else if (cntnumber.length !== 10) {
        document.getElementById('span17').innerHTML = "*Invalid number";
        status = false
    }

    else {
        document.getElementById('span17').innerHTML = "";
    }
    //more details validation
    let moredetails = document.getElementById('more');
    console.log(moredetails)
    const extradetails = [];
    if (moredetails != null) {

        if (moredetails.value == "") {
            document.getElementById('span18').innerHTML = "*Required";
            status = false;

        }
        else {
            document.getElementById('span18').innerHTML = "";
            extradetails.push(moredetails.value);
        }
    }
    let add_req = document.getElementsByClassName("addinput");
    if (add_req != null) {
        console.log("inside if1")
        for (let i = 0; i < add_req.length; i++) {
            console.log("inside for loop")
            if (add_req[i].value === "") {
                console.log("req")
                document.getElementsByClassName('required1')[i].innerHTML = "*Required";
                status = false;
            } else {
                document.getElementsByClassName('required1')[i].innerHTML = "";

                extradetails.push(add_req[i].value);    
            }
        }
    }
    //local storage print
    if (status) {

        var print = {
            name: username,
            gender: gen1,
            email: mail,
            mobilenumber: mblnumber,
            dateofbirth: date,
            nationality: nation,
            degree: degree,
            branch: branch,
            year: year,
            semester: semester,
            language: language,
            admission: admission,
            fathersname: father,
            fatheroccupation: father_occupation,
            fatherincome: income,
            mothername: mother,
            contactnumber: cntnumber,
            student: extradetails
        };
    }
    else {
        return
    }
    var object1 = JSON.parse(localStorage.getItem('key'))
    let info = [];
    if (object1) {
        object1.push(print)
        localStorage.setItem('key', JSON.stringify(object1));
    }
    else {
        info.push(print)
        localStorage.setItem('key', JSON.stringify(info));
    }
    // redirectionPage();

    window.location.href="index.html"
}

// function redirectionPage() {
//     window.location.href = "index.html";
// }
//edit validation
window.onload = fn1;
function fn1() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var obj = url.searchParams.get('id');

    if (obj) {
        var edit2 = JSON.parse(localStorage.getItem('key'));
        document.getElementById('fname').value = edit2[obj].name;
        document.getElementById('mail').value = edit2[obj].email
        document.getElementById('number').value = edit2[obj].mobilenumber
        document.getElementById('dob').value = edit2[obj].dateofbirth;
        document.getElementById('form_nation').value = edit2[obj].nationality;
        document.getElementById('form_degree').value = edit2[obj].degree;
        document.getElementById('form_branch').value = edit2[obj].branch;
        document.getElementById('form_year').value = edit2[obj].year;
        document.getElementById('form_sem').value = edit2[obj].semester;
        document.getElementById('form_admission').value = edit2[obj].admission;
        document.getElementById('fathername').value = edit2[obj].fathersname
        document.getElementById('Occupation').value = edit2[obj].fatheroccupation;
        document.getElementById('income').value = edit2[obj].fatherincome;
        document.getElementById('mother name').value = edit2[obj].mothername;
        document.getElementById('num').value = edit2[obj].contactnumber;
        if (edit2[obj].student.length != 0) {
            document.getElementById('more').value = edit2[obj].student[0];
        }

        if (edit2[obj].gender == "male") {
            document.getElementById("male").checked = "true"
        }
        else if (edit2[obj].gender == "female") {
            document.getElementById('female').checked = "true"
        }
        else {

            document.getElementById('others').checked = "true"
        }
        if (edit2[obj].language.includes('Tamil')) {
            document.getElementById('lang1').checked = "true"
        }
        if (edit2[obj].language.includes("English")) {
            document.getElementById('lang2').checked = "true"
        }
        if (edit2[obj].language.includes("Hindi")) {
            document.getElementById('lang3').checked = "true"
        }
        console.log(edit2[obj].student)
        //after edit()
        for (i = 0; i < edit2[obj].student.length - 1; i++) {
            add1(i);
        }
        //input of edit ()
        for (i = 0; i < edit2[obj].student.length - 1; i++) {

            document.getElementById('input1' + [i + 1]).value = edit2[obj].student[i + 1];
        }
        var edit_obj = JSON.parse(localStorage.getItem('key'));
        edit_obj.splice(obj, 1);
        localStorage.setItem('key', JSON.stringify(edit_obj));
        JSON.parse(localStorage.getItem('key'));
    }
}
//extra details

let inputCount = 0;
function add() {
    inputCount++;
    let input1 = `<input type="text" class="form-control addinput" placeholder="add text" id="input1${inputCount}">`;

    let icon = `<i class="fa-solid fa-trash text-danger m-2" id=delete_icon${inputCount} onclick="removeInput(${inputCount})"></i>`;
    let span = `<div class="required1 " id="req1${inputCount}" style="color:red;"></div>`;
    document.getElementById("demo").insertAdjacentHTML('beforeend', input1 + span + icon);
}
//edit function after patch in input  box
function add1(i) {
    inputCount++;
    let input1 = `<input type="text" class="form-control addinput" placeholder="add text" id="input1${inputCount}">`;

    let icon = `<i class="fa-solid fa-trash text-danger m-2" id=delete_icon${inputCount} onclick="removeInput(${inputCount})"></i>`;
    let span = `<div class="required1 " id="req1${inputCount}" style="color:red;"></div>`;
    document.getElementById("demo").insertAdjacentHTML('beforeend', input1 + span + icon);
}
function trash1() {
    let a = document.getElementById('more');
    let b = document.getElementById('delete1');
    let c = document.getElementById('span18');
    let d = document.getElementsByClassName('addinput');
    if (d.length > 0) {
        a.remove();

        b.remove();
        c.remove();
    }
    else {
        alert("can't delete");
    }
}
function removeInput(inputCount) {
    let e = document.getElementById('more');
    let f = document.getElementsByClassName('addinput');
    let g = document.getElementById('input1' + inputCount);
    let h = document.getElementById('delete_icon' + inputCount);
    let i = document.getElementById('req1' + inputCount);
    if (e) {
        g.remove();
        h.remove();
        i.remove();
    }
    else {
        if (f.length > 1) {
            g.remove();
            h.remove();
            i.remove();
        }
        else {
            alert("can't delete");
        }
    }
}


function myfn(){
    window.location.href="index.html";
}