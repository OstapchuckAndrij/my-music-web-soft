import { NotesIcon, SearchMusicIcon, HomeIcon } from "../shared/icons/Icons";
import {useNavigate} from "react-router";

export default function LayoutHeader(){
  const navigate = useNavigate()
  return (
    <div className={styles.header.container}>
      <div className="flex gap-4 ">
        <button 
          className={styles.header.button}
          onClick={()=>{navigate("/")}}>
          <HomeIcon className="w-6 h-6 text-white hover:text-emerald-600"/>
          Home
        </button>
        <button 
          className={styles.header.button}
          onClick={()=>{navigate("/tabs")
        }}>
          <SearchMusicIcon className="w-6 h-6 text-white hover:text-emerald-600"/>
          <span>Search</span>
        </button>
        <button className={styles.header.button}
        onClick={()=>{navigate("/editor")}}
        >
          <NotesIcon className="w-6 h-6 text-white hover:text-emerald-600"/>
          <span>Notes</span>
          </button>
      </div>
      <button className={styles.header.button}>Account</button>
    </div>
    )
}

const styles = {
  header:{
    container: "bg-neutral-900 flex sticky top-0 p-3 md:p-4.5 justify-between align-center border-b-1 border-b-emerald-600",
    button: "flex items-center gap-1 md:gap-2 border-dashed border-white hover:bg-emerald-950 hover:border-emerald-800 text-white hover:text-emerald-600 font-semibold p-2 rounded-md transition-colors shadow-lg active:scale-95 [&_span]:hidden [&_span]:md:inline md:border-2 border-0"
  }
}