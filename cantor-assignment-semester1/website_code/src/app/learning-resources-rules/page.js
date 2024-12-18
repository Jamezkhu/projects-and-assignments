// This is the Rules page on the Facilities link
import styles from '../page.module.css';
export const metadata = {
    title: "Learning Resources: Rules",
    description: "The Rules for Learning Resources at Cantor College",
};
const LearningResourcesRules = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2>Learning Resources</h2>
            </div>

            <h3 className={styles.h3}>Rules</h3>

            <h4 className={styles.h4}>A: Access</h4>

            <p className={styles.p}>i. The use of Library and Resource Centre facilities is normally limited to use for the educational and other purposes of the College.</p>
        
            <p className={styles.p}>ii. All individuals wishing to become members of the Library and Resource Centre must comply with the registration procedures.  
            These include an undertaking to abide by Library and Resource Centre rules.</p>

            <p className={styles.p}>iii. Individuals or organisations who are not eligible for membership but have good reason to use the Library and Resource Centre may be admitted, by arrangement, for purposes of study only. 
            Procedures for seeking admission are outlined in the External Services leaflet. 
            Non-members must sign the Visitors' Book on each visit, and may be required to produce written identification.  
            Study use does not include access to the College's Academic Network.</p>

            <p className={styles.p}>iv. ID cards issued by the College are not transferable from one person to another.  
            The person named on each card is responsible for all items borrowed on it and is liable for the cost of replacement of the card or items borrowed on it in the event of loss or damage.</p>

            <h4 className={styles.h4}>B: Use of Facilities</h4>

            <p className={styles.p}>i. The Library and Resource Centre is not responsible for loss of, or damage to, the personal belongings of its users and visitors.  
            Users must take reasonable precautions against theft of their belongings, and must not leave belongings unattended even for a very short period. 
            Study tables/PCs may not be reserved by depositing clothing or private property on the adjacent seat.  
            Articles left unattended may be removed by staff but will be returned on request at the Reception Desk.</p>

            <p className={styles.p}>ii. All users are required to conduct themselves quietly throughout the Library and Resource Centre and conversation between users must be kept to a minimum.  
            No conversation is permitted in those areas designated as 'Silent' areas.</p>

            <p className={styles.p}>iii. Personal stereos may not be used in the Library and Resource Centre.</p>

            <p className={styles.p}>iv. Mobile phones must be turned off in all Library and Resource Centre study areas. 
            Their use is permitted in the enclosed stair wells of the Main Site building.</p>

            <p className={styles.p}>v. Users should not make use of mains electrical supplies to power their own equipment, including external storage devices,  unless the equipment has been tested and confirmed as meeting the required Health & Safety standards.  
            Written evidence of such compliance will be required.</p>

            <p className={styles.p}>vi. Eating and drinking are not permitted in any of the public areas of the Library and Resource Centre.</p>

            <p className={styles.p}>vii. Action will be taken against any person misusing furniture, facilities or materials.  
            Any such person may be required to pay for the making good damage or loss.</p>

        </div>
    );
}
export default LearningResourcesRules;