import { GoLocation } from 'react-icons/go';
import { BiBuilding } from 'react-icons/bi';
import { HiOutlineGlobe } from "react-icons/hi";
import { MdModeComment, MdOutlineFaceUnlock } from "react-icons/md";
import { TbBrandStackoverflow } from "react-icons/tb";
import { FcBookmark } from "react-icons/fc";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiFillAndroid, AiFillBug, AiFillDatabase, AiFillGithub} from "react-icons/ai";
import { FcCustomerSupport, FcDataRecovery,FcHighPriority,FcIdea,FcFullTrash,FcMultipleInputs} from "react-icons/fc";



export const data =[
    {
        title:'Front End Development with Angular',
        company:'WalletHub',
        locationIcon: <GoLocation />,
        location:'Washington, DC',
        typeIcon:<HiOutlineGlobe/>,
        type:'Remote',
        tags:[{subTitle:'angular js'} , {subTitle:'cordova' }],
    },
    {
        title:'Senior ios/ iPhone Engineer',
        company:'Perk.com INC',
        locationIcon: <GoLocation />,
        location:'Bengaluru, India',
        typeIcon:<BiBuilding/>,
        type:'In Office',
        tags:[{subTitle:'iOS'} ,{ subTitle:'iPhone' }],
    },
    {
        title:'Software Engineer',
        company:'sparkNET Technologies',
        salary:'$25,000-$40,000',
        locationIcon: <GoLocation />,
        location:'No Location',
        typeIcon:<HiOutlineGlobe/>,
        type:'Remote',
        tags:[{subTitle:'iOs'} , {subTitle:'ruby on rails' }],
    },
]

export const icons = [
    {items:<MdModeComment/>},
    {items:<MdOutlineFaceUnlock/>},
    {items:<TbBrandStackoverflow/>},
    {items:<FcBookmark/>},
    {items:<BsFillJournalBookmarkFill/>},
    {items:<AiFillAndroid/>},
    {items:<AiFillBug/>},
    {items:<AiFillDatabase/>},
    {items:<AiFillGithub/>},
    {items:<FcCustomerSupport/>},
    {items:<FcDataRecovery/>},
    {items:<FcHighPriority/>},
    {items:<FcIdea/>},
    {items:<FcFullTrash/>},
    {items:<FcMultipleInputs/>},
]
// export const icons = [
//     <MdModeComment/>,
//     <MdOutlineFaceUnlock/>,
//     <TbBrandStackoverflow/>,
//     <FcBookmark/>,
//     <BsFillJournalBookmarkFill/>,
// ]