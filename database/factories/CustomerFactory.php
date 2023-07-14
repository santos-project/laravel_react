<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {

    $tel = str_replace('-', '', $this->faker->phoneNumber); //第一引数が検索元、第二引数が置き換えるもの, 第三引数が文字列
    $address = mb_substr($this->faker->address, 9); //mb_substrは、先頭から何文字目を削除のこと、9文字目から使用するという意味

    return [
      'name' => $this->faker->name,
      'kana' => $this->faker->kanaName,
      'tel' => $tel,
      'email' => $this->faker->email,
      'postcode' => $this->faker->postcode,
      'address' => $address,
      'birthday' => $this->faker->dateTime,
      'gender' => $this->faker->numberBetween(0, 2),
      'memo' => $this->faker->realText(50),
    ];
  }
}
