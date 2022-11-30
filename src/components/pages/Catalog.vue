<template>
  <DefaultLayout>
    <Catalog />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/components/layouts/base/DefaultLayout";
import Catalog from "@/components/views/catalog/Catalog";

export default {
  name: "CatalogPage",
  components: {
    Catalog,
    DefaultLayout,
  },
};
</script>

<style scoped></style>
