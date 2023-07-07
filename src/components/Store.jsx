import { useEffect, useRef } from "react";
import "../assets/scss/store.scss"
import "../assets/scss/Items.scss"
import { add } from "../store/cartSlice"
import Typed from "typed.js";
import { useDispatch, useSelector } from "react-redux";
import { STATUS, fetchProducts } from "../store/productSlice";
import { Box, CircularProgress } from "@mui/material";

const Store = () => {
    const dispatch = useDispatch()

    const { data, status } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>blogs</i> Loding....', '&amp; CODER Items....', "ANY TIME...", "<b>My Store......</b>"],
            typeSpeed: 40
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };


    }, []);
    const handleClick = (data) => {
        dispatch(add(data))
    }
    if (status === STATUS.LOADING) {
        return (
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: "50vh" }}>

                <CircularProgress />

                <p>loding....</p>
            </Box>
        )
    }
    else if (status === STATUS.IDLE) {
        console.log(status);
    }
    const datas = data.map(element => {
        return { ...element, quantity: 1 };
    });

    return (
        <>
            <div className="store"><span ref={el}></span></div>
            {console.log(datas)}
            {datas !== undefined && datas.map((value) => (
                <div className="container" key={value.id}>
                    <div className="box">
                        <img src={value.image} alt="img" />
                        <h3>{value.title}</h3>
                        <div className="rating">
                            <p>{value.rating.rate}*</p>
                        </div>
                        <p>{(value.price) * 80}</p>
                        <button onClick={() => handleClick(value)}>Add to cart</button>
                        <button>buy now</button>
                    </div>
                </div>
            ))
            }
        </>
    );
};
export default Store;
