import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer bgsyIbw48sy5vl7oNo7mZdpLGQzrsNEDdVPTwqepI8ac1HYovtcP0bPN8hgchswhRcNpVXKgAj4kIfwqls-fnG9bdJej123KV3rhYagOiffQWxhdkZMStyRZrIKSYnYx'
    }
})
