<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="index">
			<captcha ref="captcha" captchaId="dd0ce760216845709e31700b25a0ba74" @verify="handleVerifyCallback"
				@error="handleErrorCallback" />
		</view>
		<button @click="tryToVerify">验证</button>
	</view>
</template>

<script>
	import Captcha from '../../components/Captcha.vue'
	export default {
		components: {
			Captcha: Captcha
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			handleErrorCallback(error) {
				// 验证码初始化失败
				console.error(error)
			},
			tryToVerify() {
				this.$refs.captcha.verify()
			},
			handleVerifyCallback([err, validate]) {
				if (!err) {
					// 此处处理业务方逻辑
					console.log(validate)
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>