let qualLinks = document.getElementsByClassName("qual-links");
let qualContents = document.getElementsByClassName("qual-content");
let sidemenu = document.getElementById("sidemenu")


let opentab = (tabname)=>{
    for (qualLink of qualLinks) {
        qualLink.classList.remove("active");
    }
    for (qualContent of qualContents) {
        qualContent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-content");

}
let openmenu = () => {
    sidemenu.style.right = "0";

    
}
let closemenu = () => {
  sidemenu.style.right = "-200px";
};
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxYvFesubecuOXijrHQ338xIc-hufkKj_f16wnJOT7BKbXFsz18lQRdkm1Y45sy7_4jLw/exec'
const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
