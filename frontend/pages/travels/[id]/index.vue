<template>
  <div>
    {{ route.params.id }}

    <Card>
      <template #title>
        {{ data?.title }}
      </template>
      <div class="flex flex-col w-full">
        <img v-if="data?.image" :src="data?.image" alst="image" class="max-w-sm self-center"/>
        <img
          v-else
          src="~/assets/img/placeholder.png"
          class="max-w-sm self-center"
          alt="travel image"
        />
        <div class="flex flex-row-reverse">
          <RoundedButton :to="`/travels/${route.params.id}/edit`">
            <img src="/img/ic_edit.svg" />
          </RoundedButton>
           <RoundedButton @click="handleDelete">
            <img src="/img/ic_delete.svg" />
          </RoundedButton>
        </div>
        <div v-if="data" class="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-1">
          <div class="flex flex-col">
            <ItemLabel>Departure date</ItemLabel>
            <div class="text-md mt-1">
              {{ data.departureDate }}
            </div>
          </div>
          <div class="flex flex-col">
            <ItemLabel>Return date</ItemLabel>
            <div class="text-md mt-1">
              {{ data.departureDate }}
            </div>
          </div>
          <div class="flex flex-col">
            <ItemLabel>Price</ItemLabel>
            <div class="text-md mt-1">
              {{ data.price }}
            </div>
          </div>
          <div class="flex flex-col">
            <ItemLabel>Rating</ItemLabel>
            <div class="text-md mt-1">
              {{ data.rating }}
            </div>
          </div>
          <p class="text-gray-500 text-sm mt-4">{{ data.description }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useConfirmationDialog } from '~/hooks/useConfirmationDialog';
import { useTravelDetails } from '~/hooks/useTravelDetails';
import Card from '~/components/common/Card.vue';
import RoundedButton from '~/components/common/RoundedButton.vue';
import { deleteTravel } from '../../../api';
import ItemLabel from '~/components/common/ItemLabel.vue';
const { open } = useConfirmationDialog();
const route = useRoute();
const router = useRouter();
const { load } = useTravelDetails();

const { data } = await useAsyncData(
  'travelDetails',
  async () => {
    return await load(route.params.id.toString());
  },
  {
    server: false,
    watch: [route],
  }
);

const onConfirmDelete = async () => {
  await deleteTravel(route.params.id.toString());
  router.replace('/travels');
};

const handleDelete = () => {
  open(onConfirmDelete, 'Are you sure you want to delete this travel?');
};
</script>
