import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Profile } from '../../types/models'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <p key={profile.id.toString()}>{profile.name}</p>
      )}
    </>
  )
}
 
export default Profiles