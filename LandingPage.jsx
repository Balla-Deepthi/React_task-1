const LandingPage=()=>
{
    return <>
    <header>
        <a href="">MY ART</a>
        <a href="">About</a>
    </header>
    <div className="grid-container">
        <div className="img1">
            <img src="https://www.w3schools.com/w3images/streetart.jpg" alt="" />
        </div>
        <div className="img2">
            <img src="https://www.w3schools.com/w3images/streetart3.jpg" alt="" />
        </div>
        <div className="img3">
            <img src="https://www.w3schools.com/w3images/streetart2.jpg" alt="" />
        </div>
        <div className="img4">
           <img src="https://www.w3schools.com/w3images/streetart5.jpg" alt="" />  
        </div>
        <div className="img5">
          <img src="https://www.w3schools.com/w3images/streetart4.jpg" alt="" />
        </div>
     </div>
     <div className="about-content">
        <p>About</p>
        <img src="https://www.w3schools.com/w3images/boy.jpg" alt="" />
         <div className="p-container">
         Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
         </div>
         <p>Do not hesitate to contact me!</p>
         <label htmlFor="">Name</label>
         <input type="text" />
         <label htmlFor="">Email</label>
         <input type="text" />
         <label htmlFor="">Message</label>
         <input type="text" />
         <input type="submit" value="Send" />
     </div>
     <footer>
        <p>Powered by Deepthi</p>
     </footer>
    </>
}
export default LandingPage