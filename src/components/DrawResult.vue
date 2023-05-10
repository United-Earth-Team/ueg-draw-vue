<template>
    <div class="flex flex-wrap justify-center font-ueg">
        <div class="container justify-center sm:my-6  w-screen sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-5/12 2xl:w-1/3 bg-white shadow-xl">
            <div class="container justify-center space-y-4 p-4">
                <div class="flex flex-wrap flex-row pt-4 pb-3">
                    <div class="basis-1/2 px-2 lg:px-8 text-left"><img src="src/assets/UEG-logo-rgb.svg" /></div>
                    <div class="basis-1/2 text-right">PDF417 CODE</div>
                </div>
                <div class="static container justify-center">
                    <div class="flex flex-wrap justify-center relative inset-x-0 top-2 sm:top-4">
                        <p
                            class="w-3/4 px-1 sm:px-6 py-0.5 sm:py-1.5 uppercase truncate text-[2.8vw] min-[400px]:text-[2.9vw] sm:text-sm text-center text-slate-100 bg-ueg-blue overflow-clip">
                            PERSONAL PROFILE OF GLOBAL SORTITION PROTOCOL
                        </p>
                    </div>
                    <div class="flex flex-wrap justify-center">
                        <div
                            class="w-full pt-12 pb-8  space-y-3 bg-zinc-100 bg-ueg-gray-1 px-6 border rounded-lg border-ueg-gray-2">
                            <div class="flex">
                                <div class="flex-none -space-y-2">
                                    <div class="text-lg font-medium text-ueg-gray-3">姓名</div>
                                    <div class="text-lg text-sm font-bold text-ueg-gray-2">Name</div>
                                </div>
                                <div class="grow items-top justify-end inline-flex">
                                    <div class="uppercase text-xl text-right text-ueg-gray-3">图恒宇 / TU HENGYU</div>

                                </div>
                            </div>
                            <div class="flex ">
                                <div class="flex-none -space-y-2">
                                    <div class="text-lg font-medium text-ueg-gray-3">身份证号码</div>
                                    <div class="text-lg text-sm font-bold text-ueg-gray-2">ID Card</div>

                                </div>
                                <div class="grow items-top justify-end inline-flex">
                                    <div class="uppercase text-xl text-right text-ueg-gray-3">440703201011010898</div>
                                </div>
                            </div>
                            <div class="flex ">
                                <div class="flex-none -space-y-2">
                                    <div class="text-lg font-medium text-ueg-gray-3">国籍</div>
                                    <div class="text-lg text-sm font-bold text-ueg-gray-2">Nationality</div>

                                </div>
                                <div class="grow items-top justify-end inline-flex">
                                    <div class="uppercase text-xl text-right text-ueg-gray-3">中国 / CHINA</div>
                                </div>
                            </div>
                            <div class="flex ">
                                <div class="flex-none -space-y-2">
                                    <div class="text-lg font-medium text-ueg-gray-3">抽签次数</div>
                                    <div class="text-lg text-sm font-bold text-ueg-gray-2">No. of Draws</div>

                                </div>
                                <div class="grow items-top justify-end inline-flex">
                                    <div class="uppercase text-xl text-right text-ueg-gray-3">第 4 次 / FOURTH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center">
                    <div class="w-11/12 py-4 my-4 text-center text-black">
                        <p class="text-[7vw] min-[400px]:text-[5vw] md:text-3xl lg:text-4xl font-semibold sm:tracking-wide">您已获得入住地下城资格</p>
                        <p class="text-[3.5vw] min-[400px]:text-[2.9vw] sm:text-base 2xl:text-lg uppercase font-normal">YOU ARE QUALIFIED TO ENTER THE
                            UNDERGROUND CITY</p>
                    </div>
                </div>
            </div>
            <div class="container justify-center">

                <div class="flex flex-wrap justify-center">
                    <div class="w-full p-4 text-center text-slate-100 bg-ueg-blue">
                        <p class="text-[5vw] min-[400px]:text-[4.2vw] sm:text-[3.8vw] md:text-2xl lg:tracking-wide">详细入住方式等待进一步通知</p>
                        <p class="text-[2.5vw] min-[400px]:text-[2.2vw] sm:text-[12px] uppercase tracking-tighter sm:tracking-normal">FURTHER INFORMATION REGARDING THE ENTRY PROCEDURES
                            WILL BE
                            PROVIDED IN DUE COURSE
                        </p>
                    </div>
                </div>
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

        }
    },
    components: { Readme },
    methods: {

    }
}


</script>


<style scoped></style>