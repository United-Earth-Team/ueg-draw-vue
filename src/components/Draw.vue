<template>
    <div class="flex flex-wrap justify-center">
        <div class="container my-6 w-11/12 md:w-3/4 lg:w-1/3 bg-white rounded-lg shadow-xl">
            <div class="m-6 space-y-4">
                <h5 :class="$tt('headline5')">地下城居住资格抽签</h5>
                <ui-divider></ui-divider>
                <ui-textfield fullwidth required v-model.trim="input.name">
                    姓名
                </ui-textfield>
                <ui-textfield fullwidth required v-model.number="input.age">
                    年龄
                </ui-textfield>
                <ui-textfield fullwidth required v-model.trim="input.region">
                    国家或地区
                </ui-textfield>
                <ui-select v-model="input.gender" :options="options.genders" fullwidth required>性别</ui-select>
                <ui-button raised class="w-full" @click="submit">抽签</ui-button>
                <ui-divider></ui-divider>
                <Readme></Readme>
            </div>
        </div>
    </div>
</template>

<script>
import Readme from './Readme.vue'


let genders = [
    {
        value: "U",
        label: "未知性别"
    },
    {
        value: "F",
        label: "女 [F]"
    },
    {
        value: "M",
        label: "男 [M]"
    },
]

export default {
    data() {
        return {
            options: {
                genders: genders
            },
            input: {
                name: null,
                age: null,
                region: 'CHN',
                gender: 'U' // default
            }
        }
    },
    components: { Readme },
    methods: {
        submit() {
            this.$router.push({ name: 'draw_result', params: this.input})
        }
    }
}


</script>


<style scoped></style>