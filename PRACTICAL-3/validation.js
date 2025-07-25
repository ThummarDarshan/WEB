let fname = document.getElementById("fname");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let email = document.getElementById("email");
let number = document.getElementById("number");
let stuid = document.getElementById("stuid");
let validate = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let mass = document.getElementById("result");

let rejexname = /^[a-zA-Z ]+$/;
let rejexnumber = /^[0-9]{10}$/;
let rejexid = /^[0-9CEce]{7}/;
let isvalid = false;

function Validate() {
    isvalid = true;
    document.getElementById("s1").innerHTML = ' ';
    document.getElementById("s5").innerHTML = ' ';
    document.getElementById("s6").innerHTML = ' ';
    document.getElementById("s7").innerHTML = ' ';
    document.getElementById("s8").innerHTML = ' ';
    document.getElementById("s9").innerHTML = ' ';

    if (!rejexname.test(fname.value.trim())) {
        document.getElementById("s1").style.color = 'red';
        document.getElementById("s1").innerHTML = "*Invalid First Name"
        isvalid = false;
    }

    if (!rejexid.test(stuid.value.trim())) {
        document.getElementById("s5").style.color = 'red';
        document.getElementById("s5").innerHTML = "*Invalid Student ID"
        isvalid = false;
    }

    if (!email.value.endsWith("@charusat.edu.in")) {
        document.getElementById("s6").style.color = 'red';
        document.getElementById("s6").innerHTML = "*Invalid Email ID"
        isvalid = false;
    }

    if ((!email.value.trim().startsWith("24ce") && !email.value.trim().startsWith("d25ce"))) {
        document.getElementById("s6").style.color = 'red';
        document.getElementById("s6").innerHTML = "*Invalid Email id use 24CE and D25CE"
        isvalid = false;
    }

    if (pass.value != cpass.value) {
        document.getElementById("s7").style.color = 'red';
        document.getElementById("s7").innerHTML = "*Invalid Password";
        document.getElementById("s8").style.color = 'red';
        document.getElementById("s8").innerHTML = "*Invalid Password";
        isvalid = false;
    }

    if (!rejexnumber.test(number.value.trim())) {
        document.getElementById("s9").style.color = 'red';
        document.getElementById("s9").innerHTML = "*Enter the 10 digits Number"
        isvalid = false;
    }
}

cpass.addEventListener('input', () => {
    if (pass.value !== cpass.value) {
        document.getElementById("s8").style.color = 'red';
        document.getElementById("s8").innerHTML = "*Passwords do not match";
    } else {
        document.getElementById("s8").style.color = 'green';
        document.getElementById("s8").innerHTML = "✓ Passwords match";
    }
});

validate.addEventListener('click', Validate);

if (btn2 && mass) {
    btn2.addEventListener('click', () => {
        mass.innerHTML = `
            <table border="1" cellpadding="10" cellspacing="0" style="margin-top: 20px; border-collapse: collapse;">
                <tr><th>Field</th><th>Value</th></tr>
                <tr><td>Honorifics</td><td>${hono?.value || ''}</td></tr>
                <tr><td>First Name</td><td>${fname.value}</td></tr>
                <tr><td>Middle Name</td><td>${mname?.value || ''}</td></tr>
                <tr><td>Last Name</td><td>${lname?.value || ''}</td></tr>
                <tr><td>Student ID</td><td>${stuid.value}</td></tr>
                <tr><td>Email</td><td>${email.value}</td></tr>
                <tr><td>Phone Number</td><td>${number.value}</td></tr>
            </table>
        `;
    });
}
