export default function SwitchButton ({changeTheme}){
    return<>
    <label className="switch">
      <input id="checkbox" type="checkbox" defaultChecked onChange={changeTheme}/>
      <span className="slider round"></span>
    </label>
    </>
}
