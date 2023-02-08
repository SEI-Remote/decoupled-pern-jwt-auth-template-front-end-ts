import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Profile } from '../../interfaces/profile.model'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          {profiles.map((profile: Profile) =>
            <p key={profile._id}>{profile.name}</p>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles