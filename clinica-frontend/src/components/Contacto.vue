<template>
  <section id="contacto" class="fade-in-section">
    <div class="container" style="text-align: center">
      <h2>{{ 'contact' }}</h2>
      <p>{{ 'contactFormDescription' }}</p>

      <el-form
        ref="contactForm"
        class="contact-form"
        label-position="top"
        :model="form"
        :rules="rules"
        action="https://formsubmit.co/drac.coix@gmail.com"
        method="POST"
      >
        <!-- Campos hidden para formsubmit -->
        <input type="hidden" name="_next" value="https://dragoncojo.com/gracias" />
        <input type="hidden" name="_captcha" value="false" />
        <div class="flex w-full mt-4">
          <el-form-item :label='name' prop="nombre" class="pr-1 w-1/2">
            <el-input v-model="form.nombre" :name="'name'" required />
          </el-form-item>

          <el-form-item label='email' prop="email" class="pl-1 w-1/2">
            <el-input v-model="form.email" :name="'email'" required />
          </el-form-item>
        </div>
        <el-form-item :label='message' prop="mensaje">
          <el-input
            v-model="form.mensaje"
            :name="'message'"
            type="textarea"
            :rows="5"
            required
          />
        </el-form-item>

        <div class="form-actions">
          <el-button class="btn-cta" type="primary" native-type="submit" :auto-insert-space="false">
            {{ 'send' }}
          </el-button>
        </div>
      </el-form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  nombre: '',
  email: '',
  mensaje: '',
})

const rules = computed(() => ({
  nombre: [{ required: true, message: 'nameRules', trigger: 'blur' }],
  email: [
    { required: true, message: 'emailRules', trigger: 'blur' },
    { type: 'email', message: 'emailFail', trigger: 'blur' },
  ],
  mensaje: [{ required: true, message: 'messageRules', trigger: 'blur' }],
}))
</script>
