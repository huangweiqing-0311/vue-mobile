`   <template>
  
    <van-cell-group>
      <van-nav-bar class="nav-bar" title="标题" />

      <form class="form-wrap">
         <van-cell-group>
            <van-field v-model="form.mobile" label="手机号" 
            clearable :error-message="errorMsg1" required
            @blur="errorMsg1=/0?(13|14|15|18|17)[0-9]{9}/.test(form.mobile)?'':'请输入正确手机号'"
            placeholder="请输入手机号" error />
            <van-field v-model="form.code" label="验证码" required clearable
           @blur="errorMsg2=/^\d{6}$/.test(form.code)?'':'请输入6位数字'"
            placeholder="请输入验证码" :error-message="errorMsg2" />
         </van-cell-group>                  
            <van-button class="login-btn" type="info" @click.prevent="doLogin" >登录按钮</van-button> 
      </form> 
    </van-cell-group>
   
</template>

<script>
  // 导入登录请求
  import { login } from '../../app/login.js'
  // 导入保存用户信息的模块
  import { setUser } from '../../utils/storage/index.js'
export default {
    data() {
        return {
           //用户登录参数
           form: {
              mobile: '',
              code: '',  
           },
           errorMsg1: '',
           errorMsg2: '',

        }
    },
    methods: {
        // 登录验证
       async doLogin(){
            //验证输入框是否符合规则
            if (!/0?(13|14|15|18|17)[0-9]{9}/.test(this.form.mobile)) {
               this.errorMsg1 = '请输入正确的手机号' 
            }
            if (!/^\d{6}$/.test(this.form.code)) {
               this.errorMsg2 = '请输入6位数字' 
            }
            
            //如果都为空代表通过验证了
            if (this.errorMsg1=='' && this.errorMsg2=='') {

               try {
                   // 发送请求获取用户 token
                   let res = await login(this.form)
                   console.log(res)
                   // 如果登录成功要保存token
                   setUser(res.data.data)
                   // 跳转到首页
                   this.$router.push('/home')

               } catch {
                   // 登录失败, 提示用户
                   // 组件内使用 this.$toast()
                   this.$toast('手机号或验证码错误!');
               } 
            }
              
        }
    }
};
</script>

<style lang="less" scoped>
     .form-wrap {
          padding: 20px;
          margin-top: 46px;
          
          .login-btn {
              width: 100%;
              margin-top: 20px;
              border-radius: 15px;

          }
     }
</style>
