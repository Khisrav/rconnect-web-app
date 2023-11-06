<template>
    <button type="{{ if (isSubmit) ? 'submit' : 'button' }}">{{ text }}</button>
</template>

<script>
export default {
    name: "Base Button",
    props: ['isSubmit', 'text']
}
</script>