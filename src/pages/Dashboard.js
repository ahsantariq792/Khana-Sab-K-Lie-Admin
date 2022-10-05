import ImgMediaCard from "../components/Card";

function Dashboard(){
    return(
        <>
        <h1 style={{margin:'2%'}}>Pending Requests</h1>
        <div className="main">
          <ImgMediaCard
            title="Men's Pullover Training Hoodie"
            link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/aa5a3544-f593-4526-890a-748502b660c4/dri-fit-mens-pullover-training-hoodie-JP9xB5.png"
            price="Rs 1700/-"
          />
          <ImgMediaCard
            title="Sportswear Club Fleece Men's Pullover Hoodie"
            link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0cb0f4f6-fe01-4f8c-8086-8d0831134c2a/sportswear-club-fleece-pullover-hoodie-MSXJMm.png"
            price="Rs 1900/-"
          />
          <ImgMediaCard
            title="Sportswear Women's Fleece Hoodie"
            link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eca4c1d-f155-4b6b-94a6-764ba5619d85/sportswear-fleece-hoodie-pqMXxl.png"
            price="Rs 2350/-"
          />
          <ImgMediaCard
            title="Sportswear Club Fleece Men's Full-Zip Hoodie"
            link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/62642813-03d6-4c82-a902-a4660df26dc3/sportswear-club-fleece-hoodie-nf6nn9.png"
            price="Rs 2100/-"
          />
          <ImgMediaCard
            title="Sportswear Tech Fleece Men's Full-Zip Hoodie"
            link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/35974679-3a6b-4ab6-93e1-2e20fc0695bb/sportswear-tech-fleece-hoodie-Rhmk1c.jpg"
            price="Rs 2550/-"
          />
          <ImgMediaCard
            title="Sportswear Club Older Kids' Pullover Hoodie"
            link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/kzrfjedxnbsju4wia0ba/sportswear-club-older-pullover-hoodie-db99vS.png"
            price="Rs 2000/-"
          />
        </div>
        </>
    );
}

export default Dashboard;