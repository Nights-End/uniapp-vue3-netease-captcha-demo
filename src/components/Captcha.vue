<template>
	<view>
		<!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO -->
		<netease-captcha
			id="neteaseCaptcha"
			:captchaId="captchaId"
			:width="width"
			:lang="lang"
			:customStyles="customStyles"
			@verify="handleVerify($event.detail)"
			@error="handleError($event.detail)" />
		<!-- #endif -->
		
		<!-- #ifdef MP-ALIPAY -->
		<netease-captcha
			ref="neteaseCaptcha"
			:captchaId="captchaId"
			:width="width"
			:lang="lang"
			:customStyles="customStyles"
			@verify="handleVerify"
			@error="handleError" />
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		props: {
			isSense: false,
			captchaId: String,
			width: {
				type: [String, Number],
				default: 640
			},
			lang: {
				type: String,
				default: 'zh-CN'
			},
			customStyles: {
				type: Object,
				default: () => ({})
			},
		},
		data () {
			return {}
		},
		onLoad () {
			// #ifdef MP-ALIPAY
			this.$scope.handleMyVerify = this.handleMyVerify.bind(this)
			this.$scope.handleMyError = this.handleMyError.bind(this)
			// #endif
		},
		methods: {
			verify () {
				// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU
				const captchaIns = this.selectComponent('#neteaseCaptcha')
				// #endif
				// #ifdef MP-ALIPAY
				const captchaIns = this.$refs.neteaseCaptcha
				// #endif
				
				if (this.isSense) {
					captchaIns.verify()
				} else {
					captchaIns.popup()
				}
			},
			reset () {
				// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU
				const captchaIns = this.selectComponent('#neteaseCaptcha')
				// #endif
				// #ifdef MP-ALIPAY
				const captchaIns = this.$refs.neteaseCaptcha
				// #endif
				
				captchaIns.reset()
			},
			handleError (error = {}) {
				const { code, msg, message } = error
				const err = new Error( msg ? `Error ${code}"${msg}` : message)
				this.$emit('error', err)
			},
			handleVerify (result) {
				this.$emit('verify', result)
			}
		}
	}
</script>

<style>

</style>
