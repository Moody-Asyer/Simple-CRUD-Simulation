var vm = new Vue({
  el: "#app",
  data() {
    return {
      fields: [
        "id",
        "kode",
        "nama",
        "harga",
        "keterangan",
        { key: "actions", label: "Opsi" },
      ],
      items: [],
      form: {
        id: "",
        kode: "",
        nama: "",
        harga: "",
        keterangan: "",
      },
      show: false,
      form_action: "add",
      form_index: 0,
      last_item_id: 0
    };
  },
  methods: {
    info(item, index, button) {
      //   alert(JSON.stringify(item, null, 2));
    },
    edit(item, index, button) {
      //   alert(JSON.stringify(item, null, 2));
      this.form.kode = item.kode;
      this.form.nama = item.nama;
      this.form.harga = item.harga;
      this.form.keterangan = item.keterangan;
      this.form_action = "Update";
      this.form_index = index;
    },
    del(item, index, button) {
      this.items.splice(index, 1);
      this.last_item_id = this.items[this.items.length - 1].id;
    },  
    onSubmit(event) {
      event.preventDefault();
      //   alert(JSON.stringify(this.form));
      if (this.form_action == "Update") {
        // console.log("masuk sini");
        this.items[this.form_index]["kode"] = this.form.kode;
        this.items[this.form_index]["nama"] = this.form.nama;
        this.items[this.form_index]["harga"] = this.form.harga;
        this.items[this.form_index]["keterangan"] = this.form.keterangan;
      } else {
        this.items.push({
          "id": this.last_item_id + 1,
          "kode": this.form.kode,
          "nama": this.form.nama,
          "harga": this.form.harga,
          "keterangan": this.form.keterangan,
        })
        this.last_item_id = this.last_item_id + 1;
      }
      this.form.kode = "";
      this.form.nama = "";
      this.form.harga = "";
      this.form.keterangan = "";
      this.form_action = "add";
    },
    onReset(event) {
      event.preventDefault();
      this.form.kode = "";
      this.form.nama = "";
      this.form.harga = "";
      this.form.keterangan = "";
      this.form_action = "add";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
});
