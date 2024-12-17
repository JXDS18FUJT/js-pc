import axios from 'axios'
import { message, Modal } from 'ant-design-vue';
import router from '@/router';
const request = axios.create({
	baseURL: process.env.NODE_ENV === "development" ? "https://nbjk1.zzxcx.net/nbjk-admin/" : "https://nbjk.zzxcx.net/nbjk-admin/",
});
// "https://jpcj.zzxcx.net/prod-api/"
request.interceptors.request.use((config) => {
	console.log(config)
	const token = window.localStorage.getItem("token")
	// 是否需要设置 token
	if (config.headers.isLogin == '1' || !token) {
		config.headers["Authorization"] = ""; // 让每个请求携带自定义token 请根据实际情况自行修改
	}
	else {
		config.headers["Authorization"] = ("Bearer " + token);
	}

	return config;
}, error => {
	console.log(error)

});
request.interceptors.response.use((res) => {
	const code = res.data.code
	switch (code) {
		case 401:
			Modal.confirm({
				content:'登录失效,是否需要重新登录',
				cancelText:'取消',
				okText:"确定",
				onOk:()=>{
					router.push('/login')
				},
				okButtonProps:{
					type:'primary',
					htmlType:undefined
				}
			})
			break;
		case 500:
			message.error(res.data.msg||'服务器错误',3000)
			break;

	}


	return res.data

})
export default request