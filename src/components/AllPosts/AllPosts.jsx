import { useEffect, useState } from "react";
import Card from "../Card/Card";
import ContentContainer from "../ContentContainer/ContentContainer";




const AllPosts = () => {
    const [postData, setPostData] = useState(null) //kaut kāds stāvoklis komponentei, iestatīt esošo un mainīt vērtības

    
    //useEffect(() => { function call when compoent is mounted }, [dependency array])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php') //free aPI from where we will get data
        .then(response => response.json()) //tad kad dati ir dabūti mēs paņemam atbildi, noforsējam kā json
        .then(data => setPostData(data)) //tad datus ieliksim mūsu statā
        .catch(
            // handle errors
        )
    }, []) //dependency array šobrīd tukšs

    return (
        <ContentContainer>
            {postData ? ( //ternary operator, ja mūsu post dati eksistē tad do something with data
                postData.categories.map((post) => {
                    return (
                        <Card key={post.idCategory} data={post}/>
                    )
                })//bet kamēr dati nav parādījušies, rādīsies loading teksts
            ) : ( <div>loading ...</div> )} 
        </ContentContainer>
    )
}

export default AllPosts