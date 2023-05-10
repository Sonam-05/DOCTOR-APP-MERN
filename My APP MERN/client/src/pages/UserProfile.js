import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const UserProfile = () => {
    const params = useParams()
    const { user } = useSelector((state) => state.user);

    // const userProfileData = async () => {
    //     try{
    //         const res = await axios.post('/api/v1/user/userProfileData', {userId : params.id}, {
    //             headers : {
    //                 Authorization : `Bearer ${localStorage.getItem("token")}`
    //             }
    //         });
    //         if(res.data.success){
    //             message.success(res.data.message)
    //             setUser(res.data.data)
    //         }
    //     }catch(error){
    //         console.log(error)
    //     }
    // };

    // useEffect(() => {
    //     userProfileData();
    //     // eslint-disable-next-line
    // }, [])

    return (
        <Layout>
            <h5 className='userProfile'>User Profile</h5>
            {/* {console.log(user)} */}
            <section className="profileSection">
            {user && (<div className="cardContainer card text-bg-primary mb-3">
                <div className="cardHeader card-header">Name : &nbsp; {user.username}</div>
                <div className="card-body cardCon">
                    <h6 className="card-title">Email : &nbsp; {user.email}</h6>
                    <p className="card-text">Admin : &nbsp; {user.isAdmin === false ? ` No` : ' Yes'}</p>
                </div>
            </div>)}
            </section>
        </Layout>
    )
}

export default UserProfile
