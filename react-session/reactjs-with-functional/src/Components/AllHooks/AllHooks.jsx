import UseEffectExample from "./UseEffectExample"
import UseEffectHookDemo from "./UseEffectHookDemo"
import UseStateHookDemo from "./UseStateHookDemo"

function AllHooks() {
    return (
        <div className="container">
            <h4>All hooks here</h4>
            {/* <h3 style={{color:'red'}}> 1. -------------------------------useState hook</h3>
            <UseStateHookDemo/> */}
            {/* <h3 style={{color:'green'}}>2. -------------------------------useEffect hook</h3>
            <UseEffectHookDemo/> */}
            <UseEffectExample/>

        </div>
    )

}

export default AllHooks