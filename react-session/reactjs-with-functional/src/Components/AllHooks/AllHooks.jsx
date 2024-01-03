
import EmployeeContext from "./EmployeeContext"
import UseContextHookDemo from "./UseContextHookDemo"
import UseEffectExample from "./UseEffectExample"
import UseEffectHookDemo from "./UseEffectHookDemo"
import UseReducerHookDemo from "./UseReducerHookDemo"
import UseRefHookDemo from "./UseRefHookDemo"
import UseStateHookDemo from "./UseStateHookDemo"

function AllHooks() {
    return (
        <div className="container">
            <h4>All hooks here</h4>
            {/* <h3 style={{color:'red'}}> 1. -------------------------------useState hook</h3>
            <UseStateHookDemo/> */}
            {/* <h3 style={{color:'green'}}>2. -------------------------------useEffect hook</h3>
            <UseEffectHookDemo/> */}
            {/* <UseEffectExample/> */}

            {/* <UseEffectHookDemo/> */}
            {/* <h3 style={{color:'blue'}}>3. -------------------------------useReducer hook</h3>
            <UseReducerHookDemo/> */}
            {/* <h3 style={{color:'pink'}}>4. -------------------------------useRef hook</h3>
            <UseRefHookDemo/>  */}

              <h3 style={{color:'cyan'}}>5. -------------------------------useContext hook</h3>
            {/* <UseContextHookDemo/> */}
            <EmployeeContext/>
            
        </div>
    )

}

export default AllHooks