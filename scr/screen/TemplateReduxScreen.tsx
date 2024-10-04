import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { setName } from "../../modules/redux/slice/TemplateUserSlice";
import {
    Text
} from 'react-native';
import { useEffect } from "react";

const TemplateReduxScreen = () => {
    const dispatch = useDispatch()

    const setUserInfo = () => {
	    const result = dispatch(setName("hohoho"))
	    console.log("result :: ", result)
	}
    return (
        <Text>12</Text>
    )
}

export default TemplateReduxScreen;