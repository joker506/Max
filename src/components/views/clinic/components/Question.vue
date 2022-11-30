<template>
  <div class="question">
    <div class="question__header">
      <div class="question__top">
        <div class="question__category">Questionnaire</div>
        <div class="question__number">• 48130</div>
      </div>
      <div class="question__caption">
        <div class="question__title">First Assessment (Basic EMR)</div>
        <div class="question__count">123 questions</div>
      </div>
      <div class="question__desc">Questions to collect basic EMR-data</div>
    </div>
    <div class="question__progress">
      <CircleProgress :progress="75" />
      <div class="question__progress-title">
        21% of these questions are already answered in your health profile
      </div>
    </div>
    <button
      :class="['question__control', { question__control_active: isShow }]"
      @click="isShow = !isShow"
    ></button>
    <div class="question__content" v-if="isShow">
      <div class="question__inner">
        <div class="question__notify">
          <CircleProgress
            class="question__notify-progress"
            :progress="75"
            :radius="50"
            :stroke="9"
            size="middle"
          />
          <div class="question__notify-title">
            General assessment of patient health
          </div>
          <div class="question__notify-desc">
            Some description of this questionnarie, may be Lorem ipsum dolorem
            and Hello Dolly and other words...
          </div>
          <Button variant="light" outline>Continue</Button>
        </div>
      </div>

      <div class="question__inner">
        <div class="question__block">
          <div class="question__group">
            <div class="question__block-heading">
              <div class="question__block-title">{Block name}</div>
              <div class="question__block-legend">1/7</div>
            </div>
          </div>
          <div class="question__group">
            <div class="question__field">
              <vue-dropzone
                class="dropzone_image"
                id="avatarZone"
                :options="dropzoneImageOptions"
                :useCustomSlot="true"
              >
                <span class="dropzone__title"
                  >Upload your avatar (drag & drop image here or browse
                  file)</span
                >
              </vue-dropzone>
            </div>
            <div class="question__field">
              <Input size="middle" purpose="default" legend="First Name" />
            </div>
            <div class="question__field">
              <Input size="middle" purpose="default" legend="Middle Name" />
            </div>
            <div class="question__field">
              <Input size="middle" purpose="default" legend="Last Name" />
            </div>
          </div>
          <div class="question__group">
            <div class="question__field">
              <Input size="middle" purpose="default" legend="Userlink" />
              <span class="question__field-desc"
                >That’s for your unique address, like
                <a href="#">medd.pro/<b>yourname</b></a></span
              >
            </div>
          </div>
          <div class="question__group">
            <div class="question__field">
              <Multiselect
                class="multiselect_middle multiselect_light multiselect_single"
                track-by="prof"
                placeholder="Gender"
                :searchable="false"
                :options="genderSelect"
                label="prof"
                :close-on-select="true"
              ></Multiselect>
            </div>
            <div class="question__field">
              <datepicker
                wrapper-class="datepicker"
                input-class="datepicker__input"
                calendar-class="datepicker__calendar"
                :full-month-name="true"
              >
                <span slot="afterDateInput" class="datepicker__legend"
                  >Date of birth</span
                >
              </datepicker>
            </div>
          </div>
        </div>
      </div>

      <div class="question__inner question__inner_dark">
        <div class="question__heading">
          <div class="question__heading-title">
            <span>Chapter:</span> Endocrinology
          </div>
        </div>
        <div class="question__block">
          <div class="question__group">
            <div class="question__field">
              <Multiselect
                class="multiselect_middle multiselect_light multiselect_single multiselect_checkbox"
                track-by="example"
                placeholder="What eye problems can you note?"
                :searchable="false"
                :options="exampleSelect"
                label="example"
                :close-on-select="true"
                multiple
              ></Multiselect>
              <span class="question__field-desc">Prompt text</span>
            </div>
            <div class="question__block-subtitle">
              Have you had the following eye surgeries?
            </div>
            <div class="question__table">
              <div class="question__table-row question__table-row_header">
                <div class="question__table-col question__table-col_title">
                  Eye surgery
                </div>
                <div class="question__table-col question__table-col_select">
                  Presence
                </div>
                <div class="question__table-col question__table-col_date">
                  Beginning date
                </div>
                <div class="question__table-col question__table-col_desc">
                  Detailing
                </div>
                <div class="question__table-col question__table-col_file">
                  Medical documents
                </div>
              </div>
              <div class="question__table-row">
                <div class="question__table-col question__table-col_title">
                  LASIK
                </div>
                <div
                  class="question__table-col question__table-col_select"
                ></div>
                <div class="question__table-col question__table-col_date">
                  <datepicker
                    class="datepicker_clear"
                    wrapper-class="datepicker"
                    input-class="datepicker__input"
                    calendar-class="datepicker__calendar"
                    :full-month-name="true"
                  >
                  </datepicker>
                </div>
                <div class="question__table-col question__table-col_desc"></div>
                <div class="question__table-col question__table-col_file">
                  <a href="#" class="question__table-link">Attach file</a>
                </div>
              </div>
              <div class="question__table-row">
                <div class="question__table-col question__table-col_title">
                  Corneal transplant
                </div>
                <div
                  class="question__table-col question__table-col_select"
                ></div>
                <div class="question__table-col question__table-col_date">
                  <datepicker
                    class="datepicker_clear"
                    wrapper-class="datepicker"
                    input-class="datepicker__input"
                    calendar-class="datepicker__calendar"
                    :full-month-name="true"
                  >
                  </datepicker>
                </div>
                <div class="question__table-col question__table-col_desc"></div>
                <div class="question__table-col question__table-col_file">
                  <a href="#" class="question__table-link">Attach file</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="question__inform">
          <div class="question__inform-circle">
            <CircleProgress
              :progress="75"
              :radius="33"
              :stroke="6"
              size="middle-sm"
            />
          </div>
          <div class="question__inform-content">
            <div class="question__inform-desc">
              Awesome! Your progress of questionnarie is great! <br />Keep it
              up!
            </div>
          </div>
        </div>
        <div class="question__block">
          <div class="question__group">
            <div class="question__field">
              <Multiselect
                class="multiselect_middle multiselect_light multiselect_single multiselect_checkbox"
                track-by="example"
                placeholder="What eye problems can you note?"
                :searchable="false"
                :options="exampleSelect"
                label="example"
                :close-on-select="true"
                multiple
              ></Multiselect>
              <span class="question__field-desc">Prompt text</span>
            </div>
            <div class="question__field">
              <Multiselect
                class="multiselect_middle multiselect_light multiselect_single multiselect_checkbox"
                track-by="example"
                placeholder="What eye problems can you note?"
                :searchable="false"
                :options="exampleSelect"
                label="example"
                :close-on-select="true"
                multiple
              ></Multiselect>
              <span class="question__field-desc">Prompt text</span>
            </div>
          </div>
        </div>
      </div>

      <div class="question__inner">
        <div class="question__block">
          <div class="question__group">
            <div class="question__block-title">
              Additional options for consultation
            </div>
            <div class="question__remove-wrap">
              <a href="#" class="question__remove-link">Erase addition</a>
            </div>
            <div class="question__field">
              <Input size="middle" purpose="default" legend="Option name" />
            </div>
            <div class="question__field">
              <Input size="middle" purpose="default" legend="Price" />
            </div>
          </div>
          <div class="question__group">
            <a href="#" class="question__add-link">+ Add more</a>
          </div>
        </div>
      </div>

      <div class="question__inner">
        <div class="question__block">
          <div class="question__group">
            <div class="question__field">
              <div class="question__block-subtitle">
                Do you get cold hands and feet regularly?
              </div>
              <Toggle onText="Yes" offText="No" />
              <span class="question__field-desc">Prompt text</span>
            </div>
            <div class="question__field">
              <Input
                size="middle"
                purpose="default"
                legend="Numbers of childbirth"
              />
              <span class="question__field-desc">Prompt text</span>
            </div>
            <div class="question__row">
              <div class="question__col question__col_wide">
                <div class="question__field">
                  <Input
                    size="middle"
                    purpose="default"
                    legend="Numbers of childbirth"
                  />
                </div>
              </div>
              <div class="question__col question__col_narrow">
                <div class="question__field">
                  <Multiselect
                    class="multiselect_middle multiselect_light multiselect_single"
                    track-by="prof"
                    placeholder="Cm"
                    :searchable="false"
                    :options="genderSelect"
                    label="prof"
                    :close-on-select="true"
                  ></Multiselect>
                </div>
              </div>
            </div>
            <div class="question__field">
              <Textarea legend="Prompt text" />
            </div>
            <div class="question__field">
              <datepicker
                wrapper-class="datepicker"
                input-class="datepicker__input"
                calendar-class="datepicker__calendar"
                :full-month-name="true"
              >
                <span slot="afterDateInput" class="datepicker__legend"
                  >When you have begun to exercise regularly?</span
                >
              </datepicker>
            </div>
            <div class="question__field">
              <vue-dropzone
                class="dropzone_file"
                id="fileZone"
                :options="dropzoneImageOptions"
                :useCustomSlot="true"
              >
                <span class="dropzone__title"
                  >Last report of Abdomenal CT study (drag & drop file here or
                  browse file)</span
                >
              </vue-dropzone>
            </div>
            <div class="question__block-subtitle">
              Have you had the following eye surgeries?
            </div>
            <div class="question__table">
              <div class="question__table-row question__table-row_header">
                <div class="question__table-col question__table-col_title">
                  Eye surgery
                </div>
                <div class="question__table-col question__table-col_select">
                  Presence
                </div>
                <div class="question__table-col question__table-col_date">
                  Beginning date
                </div>
                <div class="question__table-col question__table-col_desc">
                  Detailing
                </div>
                <div class="question__table-col question__table-col_file">
                  Medical documents
                </div>
              </div>
              <div class="question__table-row">
                <div class="question__table-col question__table-col_title">
                  LASIK
                </div>
                <div
                  class="question__table-col question__table-col_select"
                ></div>
                <div class="question__table-col question__table-col_date">
                  <datepicker
                    class="datepicker_clear"
                    wrapper-class="datepicker"
                    input-class="datepicker__input"
                    calendar-class="datepicker__calendar"
                    :full-month-name="true"
                  >
                  </datepicker>
                </div>
                <div class="question__table-col question__table-col_desc"></div>
                <div class="question__table-col question__table-col_file">
                  <a href="#" class="question__table-link">Attach file</a>
                </div>
              </div>
              <div class="question__table-row">
                <div class="question__table-col question__table-col_title">
                  Corneal transplant
                </div>
                <div
                  class="question__table-col question__table-col_select"
                ></div>
                <div class="question__table-col question__table-col_date">
                  <datepicker
                    class="datepicker_clear"
                    wrapper-class="datepicker"
                    input-class="datepicker__input"
                    calendar-class="datepicker__calendar"
                    :full-month-name="true"
                  >
                  </datepicker>
                </div>
                <div class="question__table-col question__table-col_desc"></div>
                <div class="question__table-col question__table-col_file">
                  <a href="#" class="question__table-link">Attach file</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import Multiselect from "vue-multiselect";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "Question",
  data() {
    return {
      qwqw: [],
      isShow: true,
      genderSelect: [
        {
          id: 0,
          prof: "Male",
        },
        {
          id: 1,
          prof: "Female",
        },
      ],
      exampleSelect: [
        {
          id: 0,
          example: "Allergy and Immunology",
        },
        {
          id: 1,
          example: "Cardiology",
        },
        {
          id: 2,
          example: "Cardiovascular/Thoracic Surgery",
        },
        {
          id: 3,
          example: "Clinical Pathology",
        },
        {
          id: 4,
          example: "Dermatology",
        },
      ],
      dropzoneImageOptions: {
        url: "https://httpbin.org/post",
        maxFiles: 1,
        addRemoveLinks: true,
      },
    };
  },
  components: {
    Datepicker,
    Multiselect,
    vueDropzone: vue2Dropzone,
  },
};
</script>

<style lang="scss" scoped>
.question {
  background: #ffffff;
  border: 1px solid #d5d6d9;
  border-radius: 10px;
  margin-bottom: 20px;

  $this: &;

  &:last-child {
    margin-bottom: 0;
  }

  &__header {
    padding: 14px 30px 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    line-height: 1.17;
    margin-bottom: 11px;
  }
  &__category {
    font-weight: bold;
    font-size: 12px;
    color: #80848c;
    padding: 5px 7px 3px;
    background: #bff2ea;
    border-radius: 6px;
  }
  &__number {
    font-size: 11px;
    letter-spacing: 0.1px;
    color: #80848c;
    margin-left: 10px;
    position: relative;
    top: 2px;
  }
  &__caption {
    display: flex;
    align-items: flex-start;
    margin-bottom: 7px;
  }
  &__title {
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.1px;
  }
  &__count {
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.1px;
    color: $color-primary;
    margin-left: 11px;
    position: relative;
    top: 2px;
  }
  &__desc {
    font-size: 13px;
    color: $color-dark;
    letter-spacing: -0.1px;
  }
  &__progress {
    display: flex;
    align-items: center;
    background: #4cdac5;
    color: #ffffff;
    padding: 10px 30px 8px;
  }
  &__progress-title {
    font-weight: 900;
    margin-left: 30px;
  }
  &__control {
    display: block;
    width: 100%;
    height: 38px;
    position: relative;
    transition: background-color $transition;
    border-radius: 0 0 10px 10px;

    &:hover {
      background-color: #f8f8f8;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 7px 0 7px;
      border-color: #95989f transparent transparent transparent;
      transition: transform $transition;
    }

    &_active {
      &:before {
        transform: translate(-50%, -50%) rotate(180deg);
      }
    }
  }
  &__content {
    border-top: 2px solid #f8f8f8;
  }
  &__inner {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;

    &_dark {
      background-color: rgba(86, 91, 101, 0.1);
    }

    #{$this}__heading {
      margin-top: -30px;
    }
  }
  &__notify {
    border-radius: 10px;
    color: #ffffff;
    background-color: $color-primary;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 6px 6px rgba(153, 155, 168, 0.3);
    margin-bottom: 30px;
  }
  &__notify-progress {
    margin-bottom: 18px;
  }
  &__notify-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 7px;
  }
  &__notify-desc {
    max-width: 400px;
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 25px;
  }

  &__block {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 6px 6px rgba(153, 155, 168, 0.3);
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__group {
    border-bottom: 2px solid #f8f8f8;
    padding: 30px;

    &:last-child {
      border-bottom: none;
    }
  }
  &__block-heading {
    font-size: 16px;
    line-height: 1.2;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__block-title {
    font-weight: bold;
    color: $color-dark;
    font-size: 16px;
    margin-bottom: 12px;

    #{$this}__block-heading & {
      margin-bottom: 0;
    }
  }
  &__block-subtitle {
    margin-bottom: 7px;
    font-size: 14px;
    color: $color-dark;
  }
  &__block-legend {
    color: #95989f;
  }
  &__field {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__field-desc {
    font-style: italic;
    font-size: 13px;
    line-height: 16px;
    color: #6b6f78;
    display: block;
    margin-top: 6px;

    a {
      color: $color-primary;
    }
  }
  &__heading {
    color: #ffffff;
    padding: 14px 30px 10px;
    background: #565b65;
    border-radius: 10px;
    box-shadow: 0 6px 6px rgba(153, 155, 168, 0.3);
    margin-bottom: 30px;
  }
  &__heading-title {
    font-weight: bold;
    font-size: 16px;

    span {
      color: #d5d6d9;
    }
  }
  &__inform {
    display: flex;
    box-shadow: 0 6px 6px rgba(153, 155, 168, 0.3);
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__inform-circle {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    width: 142px;
    background-color: $color-primary;
    border-radius: 10px 0 0 10px;
    color: #ffffff;
  }
  &__inform-content {
    padding: 30px;
  }
  &__inform-desc {
    font-weight: bold;
    font-size: 16px;
    line-height: 1.375;
  }
  &__table {
    font-size: 12px;
    border: 1px solid #bfc1c5;
    border-radius: 6px;
  }
  &__table-row {
    display: flex;
    flex-wrap: wrap;

    &:last-child {
      border-bottom: none;
    }

    &_header {
      height: 48px;
      font-weight: bold;
      white-space: nowrap;
    }
  }
  &__table-col {
    display: flex;
    align-items: center;
    padding: 0 14px;
    border-right: 1px solid #bfc1c5;
    border-bottom: 1px solid #bfc1c5;

    &:last-child {
      border-right: none;
    }

    #{$this}__table-row:last-child & {
      border-bottom: none;
    }

    &_title {
      width: 30%;
    }
    &_select {
      width: 13%;
    }
    &_date {
      width: 15%;

      #{$this}__table-row:not(#{$this}__table-row_header) & {
        padding: 0;
      }
    }
    &_desc {
      width: 23%;
    }
    &_file {
      width: 19%;
    }
  }
  &__table-link {
    font-weight: bold;
    color: $color-primary;
  }
  &__add-link {
    color: $color-primary;
    font-weight: bold;
  }
  &__remove-wrap {
    text-align: right;
    margin-bottom: 10px;
  }
  &__remove-link {
    color: $color-secondary;
    font-weight: bold;
    font-size: 12px;
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -$grid-gutter/2;
    margin-left: -$grid-gutter/2;
    margin-bottom: 20px;
  }
  &__col {
    width: percentage(1/1);
    padding: 0 $grid-gutter/2;

    &_wide {
      width: 74%;
    }
    &_narrow {
      width: 26%;
    }
  }
}
</style>
