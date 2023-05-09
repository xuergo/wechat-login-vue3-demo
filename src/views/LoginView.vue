<template>
	<div class="login-form-main">
		<div id="wx-qrcode"></div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted,   watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
 

watch(
	() => router.currentRoute.value.fullPath,
	async () => {
		if (route.query.code) {
			try {
				const code = decodeURIComponent(route.query.code as string);
				// 直接调用自己登录接口（注意交互 加个loading 啥的）
				// const res = await getUserInfo({ code: code });
				router.push({ name: "home" });
			} catch (err) {
				// 自己的登录接口失败（可能过期啥的）直接重新进入登录页
				console.log(err);
				router.replace({
					name: "login"
				});
				initCode();
			}
		}
	} 
);
onMounted(() => {
	initCode();
});
 
 
//初始化企业微信
const initCode = () => {
	  WwLogin({
		id: "wx-qrcode", // 登录页面显示二维码的容器id
		appid: " ", // 企业微信的CorpID，在企业微信管理端查看
		agentid: " ", // 授权方的网页应用id，在具体的网页应用中查看
		redirect_uri: encodeURIComponent("http://test.com") // 重定向的地址，需要进行encode
	});
};

 
</script>
<style   scoped>
#wx-qrcode {
	display: flex;
	align-items: center;
	justify-content: center;
}
.login-form-main {
	position: relative;
}
 
</style>
