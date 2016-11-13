using UnityEngine;
using System.Collections;
public class SpawnManager : MonoBehaviour {
	public GameObject Enemy;
	void Start () 
	{
		//StartCoroutine(RandomSpawn());

	}
	Vector3 SetPos()
	{
		float PosY = Random.Range(0.0f, 1.0f);
		float PosX = 1.8f;
		Vector3 Pos = Camera.main.ViewportToWorldPoint(new Vector3(PosX, PosY, 0));
		Pos.z = 3.6f;
		return Pos;
	}
	IEnumerator RandomSpawn() //순방향
	{
		while (true)
		{
			Instantiate(Enemy,SetPos(), Quaternion.identity); //게임오브젝트의 클론생성함수
			Debug.Log(SetPos().x);
			Debug.Log(SetPos().y);
			yield return new WaitForSeconds(5f);
		}
	}

}
